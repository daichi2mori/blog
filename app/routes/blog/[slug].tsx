import Publish from "app/components/Publish";
import { getPostBySlug, getPosts } from "app/lib/posts";
import { ssgParams } from "hono/ssg";
import { createRoute } from "honox/factory";

export default createRoute(
	ssgParams(() => {
		const posts = getPosts();
		const params = posts.map((post) => ({
			slug: post.slug,
		}));
		return params;
	}),
	(c) => {
		const slug = c.req.param("slug");
		if (slug === ":slug") {
			return c.notFound();
		}

		const post = getPostBySlug(slug);
		const title = post?.title ?? "";
		const desc = post?.description ?? "";

		return c.render(
			<article
				class={
					"bg-card rounded-[16px] px-4 md:px-9 pt-6 pb-4 flex flex-col gap-4"
				}
			>
				<div class={"relative"}>
					<h1
						class={
							"text-2xl md:text-4xl font-bold md:before:w-1 md:before:h-5 md:before:rounded-md md:before:bg-primary md:before:absolute md:before:top-[0.75rem] md:before:left-[-1.125rem]"
						}
					>
						{post?.title}
					</h1>
				</div>
				<Publish
					published_at={post?.published_at}
					modified={post?.modified}
					tags={post?.tags}
				/>
				<div class={"markdown"}>{post?.Component({})}</div>
			</article>,
			{
				title,
				desc,
				slug,
			},
		);
	},
);
