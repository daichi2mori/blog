import ssg from "@hono/vite-ssg";
import mdx from "@mdx-js/rollup";
import honox from "honox/vite";
import client from "honox/vite/client";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			build: {
				rollupOptions: {
					input: ["/app/theme.ts", "/app/styles/style.css"],
				},
			},
			plugins: [client()],
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
					[
						remarkRehype,
						{
							footnoteBackContent: "↩︎",
							footnoteLabel: " ",
							footnoteLabelTagName: "hr",
							footnoteBackLabel: "Back to reference 1",
						},
					],
					remarkParse,
				],
				rehypePlugins: [
					rehypeStringify,
					[rehypePrettyCode, { theme: "dark-plus", keepBackground: false }],
				],
			}),
		],
	};
});
