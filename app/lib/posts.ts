import type { Frontmatter, GetPostsByTag, MDX, Tags } from "../types/index";

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
		const aDate = dateToNumber(aPost.frontmatter.published_at);
		const bDate = dateToNumber(bPost.frontmatter.published_at);
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
		.filter(([_, post]) => post.frontmatter?.published)
		.sort(sortByDateDesc())
		.map(([path, post]) => ({
			slug: extractFilenameFromPath(path),
			title: post.frontmatter.title,
			description: post.frontmatter.description,
			published_at: post.frontmatter.published_at,
			modified: post.frontmatter.modified,
			tags: post.frontmatter.tags,
			Component: post.default,
		}));

	return postsData;
};

export const getPostBySlug = (slug: string) => {
	const posts = getPosts();
	const post = posts.find((post) => post.slug === slug);
	return post;
};

export const getPostByTag = (tag: Tags): GetPostsByTag[] => {
	const posts = getPosts();
	const filteredPosts = posts.filter((post) =>
		post.tags.some((t) => t === tag),
	);
	return filteredPosts;
};
