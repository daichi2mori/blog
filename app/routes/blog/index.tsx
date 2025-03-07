import Publish from "app/components/Publish";
import { getPosts } from "app/lib/posts";
import { Fragment } from "hono/jsx/jsx-runtime";
import { createRoute } from "honox/factory";

export default createRoute((c) => {
	const posts = getPosts();

	return c.render(
		<div class={"flex flex-col gap-3"}>
			{posts.map((post) => (
				<Fragment key={post.slug}>
					<div
						class={
							"relative bg-card rounded-[16px] py-3 pr-6 md:pr-3 pl-6 md:pl-9 grid md:grid-cols-[1fr_3.25rem]"
						}
					>
						<div class={"flex flex-col gap-1.5 md:gap-3 md:py-3 md:pr-5"}>
							<a
								href={`/blog/${post.slug}`}
								class={
									"w-fit text-xl md:text-3xl font-bold duration-200 hover:text-primary before:w-1 before:h-5 before:rounded-md before:bg-primary before:absolute before:top-[35px] before:left-[18px] before:hidden md:before:block"
								}
							>
								{post.title}
								<span className="absolute inset-0 md:hidden" />
							</a>
							<p class={"text-sm md:text-base"}>{post.description}</p>
							<Publish
								published_at={post.published_at}
								modified={post.modified}
								tags={post.tags}
							/>
						</div>

						<a
							href={`/blog/${post.slug}`}
							class={
								"hidden md:grid place-items-center rounded-xl bg-btn duration-300 hover:bg-btn-hover"
							}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#09090b"
								stroke-width="2"
								class={"stroke-primary"}
							>
								<title>Right Arrow Icon</title>
								<path d="m9 18 6-6-6-6" />
							</svg>
						</a>
					</div>
				</Fragment>
			))}
		</div>,
	);
});
