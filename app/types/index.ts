import type { JSX } from "hono/jsx/jsx-runtime";
import type { MDXProps } from "mdx/types";
import type { allTags } from "site.config";

export type Frontmatter = {
  title: string;
  description: string;
  published_at: string;
  modified?: string;
  published: boolean;
  category: string;
  tags: Tags[];
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

export type Head = {
  title?: string;
  desc?: string;
  slug?: string;
  tag?: Tags;
};

export type Tags = (typeof allTags)[number]["id"];

export type GetPostsByTag = {
  slug: string;
  title: string;
  description: string;
  published_at: string;
  modified: string | undefined;
  tags: Tags[];
  Component: (props: MDXProps) => JSX.Element;
};
