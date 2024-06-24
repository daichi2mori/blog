import path from "node:path";
import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import client from "honox/vite/client";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import { remarkAlert } from "remark-github-blockquote-alert";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { defineConfig, normalizePath } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			plugins: [
				client({
					input: ["/app/theme.ts", "/app/styles/style.css"],
				}),
			],
		};
	}

	return {
		build: {
			emptyOutDir: false,
		},

		plugins: [
			tsconfigPaths(),
			ssg({ entry }),
			honox(),
			mdx({
				jsxImportSource: "hono/jsx",
				remarkPlugins: [
					remarkFrontmatter,
					remarkMdxFrontmatter,
					remarkAlert,
					remarkRehype,
					remarkParse,
				],
				rehypePlugins: [
					rehypeStringify,
					[rehypePrettyCode, { theme: "dark-plus", keepBackground: false }],
				],
			}),
			viteStaticCopy({
				targets: [
					{
						src: [
							"./app/posts/**/*.png",
							"./app/posts/**/*.jpg",
							"./app/posts/**/*.jpeg",
							"./app/posts/**/*.webp",
							"./app/posts/**/*.gif",
						],
						dest: "static",
						rename: (
							fileName: string,
							fileExtension: string,
							_fullPath: string,
						) => {
							return normalizePath(
								path.relative(__dirname, `${fileName}.${fileExtension}`),
							);
						},
						overwrite: false,
					},
				],
			}),
		],

		ssr: {
			external: ["satori", "@resvg/resvg-js", "budoux"],
		},
	};
});
