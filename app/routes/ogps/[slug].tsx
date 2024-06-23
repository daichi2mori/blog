import { Resvg } from "@resvg/resvg-js";
import { getPostBySlug, getPosts } from "app/lib/posts";
import type { GoogleFontOptions } from "app/types";
import { model as jaModel } from "budoux/dist/data/models/ja";
import { Parser } from "budoux/dist/parser";
import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";
import satori from "satori";

const parser = new Parser(jaModel);

export default createRoute(
	ssgParams(() => {
		const posts = getPosts();
		return posts.map((post) => ({
			slug: post.slug,
		}));
	}),
	async (c) => {
		const slug = c.req.param("slug");
		if (slug === ":slug") {
			return c.notFound();
		}

		const post = getPostBySlug(slug);
		const title = post?.title ?? "";
		const parsedTitle = parser.parse(title);

		const notoSansBold = await loadGoogleFont({
			family: "Noto Sans JP",
			weight: 600,
		});

		const svg = await satori(
			<div tw={"w-full h-full bg-[#E0EFFF] flex p-9"}>
				<div
					tw={
						"w-full flex flex-col justify-end bg-white/85 rounded-3xl border-solid"
					}
				>
					<div tw={"w-full flex flex-1 items-center mt-10 px-34"}>
						<div tw={"flex justify-center flex-wrap text-[4.4rem]"}>
							{parsedTitle}
						</div>
					</div>
					<div
						tw={
							"w-full flex items-center justify-between px-18 mb-10 text-gray-900"
						}
					>
						<div tw={"flex items-center text-4xl"}>
							<img
								src="https://avatars.githubusercontent.com/u/65765140?v=4"
								alt="avatar"
								tw={"rounded-full mr-4 w-16 h-16"}
							/>
							d2m
						</div>
						<h1 tw={"font-semibold"}>blog.daichi2mori.com</h1>
					</div>
				</div>
			</div>,
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "NotoSansJP",
						data: notoSansBold,
						weight: 600,
						style: "normal",
					},
				],
			},
		);

		const body = new Resvg(svg).render().asPng();

		c.header("Content-Type", "image/png");
		return c.body(body);
	},
);

function buildGoogleFontUrl({
	family,
	weight,
	text,
	display,
}: GoogleFontOptions) {
	const params: Record<string, string> = {
		family: `${encodeURIComponent(family)}${weight ? `:wght@${weight}` : ""}`,
	};

	if (text) {
		params.text = text;
	} else {
		params.subset = "latin";
	}

	if (display) {
		params.display = display;
	}

	return `https://fonts.googleapis.com/css2?${Object.keys(params)
		.map((key) => `${key}=${params[key]}`)
		.join("&")}`;
}

async function loadGoogleFont({ family, weight, text }: GoogleFontOptions) {
	const url = buildGoogleFontUrl({ family, weight, text });

	const response = await fetch(url, {
		headers: {
			"User-Agent":
				"Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
		},
	});

	if (!response.ok) {
		throw new Error("Failed to fetch Google Font CSS");
	}

	const css = await response.text();
	const fontUrlMatch = css.match(
		/src: url\((.+?)\) format\('(opentype|truetype)'\)/,
	);
	const fontUrl = fontUrlMatch?.[1];

	if (!fontUrl) {
		throw new Error("Could not find font URL");
	}

	const fontResponse = await fetch(fontUrl);

	if (!fontResponse.ok) {
		throw new Error("Failed to fetch font file");
	}

	return fontResponse.arrayBuffer();
}
