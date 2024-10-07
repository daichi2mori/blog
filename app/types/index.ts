import type { JSX } from "hono/jsx/jsx-runtime";
import type { MDXProps } from "mdx/types";

export type Frontmatter = {
	title: string;
	description: string;
	published: string;
	modified?: string;
	category: string;
	tags: string[];
};

export type MDX = {
	frontmatter: Frontmatter;
	default: (props: MDXProps) => JSX.Element;
	[Symbol.toStringTag]: string;
};

export type GoogleFontOptions = {
	family: string;
	weight?: number;
	text?: string;
	display?: string;
};
