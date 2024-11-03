import type { JSX } from "hono/jsx/jsx-runtime";
import type { MDXProps } from "mdx/types";

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

export const allTags = [
  { id: "markdown", label: "Markdown" },
  { id: "windows", label: "Windows" },
  { id: "github", label: "GitHub" },
  { id: "bun", label: "Bun" },
  { id: "sqlite", label: "SQLite" },
  { id: "golang", label: "Go言語" },
  { id: "vscode", label: "VSCode" },
  { id: "linux", label: "Linux" },
  { id: "ubuntu", label: "Ubuntu" },
  { id: "react", label: "React" },
  { id: "vite", label: "Vite" },
  { id: "css", label: "CSS" },
  { id: "javascript", label: "JavaScript" },
] as const;

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
