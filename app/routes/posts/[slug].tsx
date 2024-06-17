import Publish from "app/components/published";
import { getPostBySlug, getPosts } from "app/lib/posts";
import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";

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
		const desc = post?.description;

		return c.render(
			<article
				class={
					"bg-card rounded-[16px] px-6 md:px-9 pt-6 pb-4 flex flex-col gap-4"
				}
			>
				<div class={"relative"}>
					<h1
						class={
							"text-3xl md:text-[2.5rem]/[2.75rem] font-bold md:before:w-1 md:before:h-5 md:before:rounded-md md:before:bg-primary md:before:absolute md:before:top-[0.75rem] md:before:left-[-1.125rem]"
						}
					>
						{post?.title}
					</h1>
				</div>
				<div class={"border-b-[1px] pb-5"}>
					<Publish published={post?.published} modified={post?.modified} />
				</div>
				<div class={"markdown"}>{post?.Component({})}</div>
			</article>,
			{
				title,
				desc,
			},
		);
	},
);
