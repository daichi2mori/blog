import type { Frontmatter, MDX } from "../types/index";

const posts = import.meta.glob<MDX>("../../posts/**/*.{md,mdx}", {
	eager: true,
});

const dateToNumber = (date: string) => {
	return Number.parseInt(date.replaceAll("-", ""));
};

const sortByDateDesc = ():
	| ((
			a: [string, { frontmatter: Frontmatter }],
			b: [string, { frontmatter: Frontmatter }],
	  ) => number)
	| undefined => {
	return ([_aid, aPost], [_bid, bPost]) => {
		const aDate = dateToNumber(aPost.frontmatter.published);
		const bDate = dateToNumber(bPost.frontmatter.published);
		return bDate - aDate;
	};
};

const extractFilenameFromPath = (path: string) => {
	const match = path.match(/\/([^\/]+)\/index\.(md|mdx)$/);
	if (!match) {
		throw new Error(`Invalid path: ${path}`);
	}
	return match[1];
};

export const getPosts = () => {
	const postsData = Object.entries(posts)
		.sort(sortByDateDesc())
		.map(([path, post]) => ({
			slug: extractFilenameFromPath(path),
			title: post.frontmatter.title,
			description: post.frontmatter.description,
			published: post.frontmatter.published,
			modified: post.frontmatter.modified,
			Component: post.default,
		}));

	return postsData;
};

export const getPostBySlug = (slug: string) => {
	const posts = getPosts();
	const post = posts.find((post) => post.slug === slug);
	return post;
};
