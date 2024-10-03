import { createRoute } from "honox/factory";

export default createRoute((c) => {
	return c.render(
		<div class={"grid grid-cols-2 gap-7 mt-6 md:mt-12 px-6"}>
			{/* Profile */}
			<div
				class={"flex flex-col items-center p-6 bg-card rounded-3xl col-span-2"}
			>
				<div>
					<img
						src="/static/profile.avif"
						alt="profile"
						class={"rounded-full aspect-square w-20 md:w-32"}
					/>
					<div class={"mt-4 md:mt-6 ml-2"}>
						<h2 class={"text-2xl md:text-3xl font-bold"}>Daichi Mori</h2>
						<p
							class={
								"text-sm md:text-base mt-2 md:mt-3 text-neutral-600 dark:text-neutral-400"
							}
						>
							I'm a front-end developer and can do a little back-end as well.
						</p>
						<a
							href="/about"
							class={"hidden mt-2 items-center w-fit hover:text-primary group"}
						>
							About me
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 -2.5 24 24"
								fill="none"
								stroke="none"
								stroke-width="2"
								class="stroke-foreground group-hover:stroke-primary"
							>
								<title>arrow</title>
								<path d="M5 12h14" />
								<path d="m12 5 7 7-7 7" />
							</svg>
						</a>
					</div>
				</div>
			</div>
			{/* Blog */}
			<a
				href="/blog"
				class={
					"col-span-2 p-6 rounded-3xl flex items-center bg-blog-gradient transform hover:scale-105 transition duration-200 ease-in-out"
				}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					class="w-16 md:w-32 stroke-gray-800 fill-none"
				>
					<title>blog</title>
					<path d="M2 6h4" />
					<path d="M2 10h4" />
					<path d="M2 14h4" />
					<path d="M2 18h4" />
					<rect width="16" height="20" x="4" y="2" rx="2" />
					<path d="M9.5 8h5" />
					<path d="M9.5 12H16" />
					<path d="M9.5 16H14" />
				</svg>
				<p
					class={
						"grow text-gray-800 text-center font-extrabold text-2xl md:text-4xl"
					}
				>
					Blog
				</p>
			</a>
			{/* Twitter */}
			<a
				href="https://x.com/daichi2mori"
				target="_blank"
				rel="noreferrer"
				class={
					"p-6 bg-twitter-gradient rounded-3xl aspect-square flex items-center justify-center transform hover:scale-105 transition duration-200 ease-in-out"
				}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="-89.00934757 -46.8841404 643.93723344 446.8841404"
					class="fill-[#ffffff] w-16 md:w-32"
				>
					<title>twitter</title>
					<path d="m154.729 400c185.669 0 287.205-153.876 287.205-287.312 0-4.37-.089-8.72-.286-13.052a205.304 205.304 0 0 0 50.352-52.29c-18.087 8.044-37.55 13.458-57.968 15.899 20.841-12.501 36.84-32.278 44.389-55.852a202.42 202.42 0 0 1 -64.098 24.511c-18.42-19.628-44.644-31.904-73.682-31.904-55.744 0-100.948 45.222-100.948 100.965 0 7.925.887 15.631 2.619 23.025-83.895-4.223-158.287-44.405-208.074-105.504a100.739 100.739 0 0 0 -13.668 50.754c0 35.034 17.82 65.961 44.92 84.055a100.172 100.172 0 0 1 -45.716-12.63c-.015.424-.015.837-.015 1.29 0 48.903 34.794 89.734 80.982 98.986a101.036 101.036 0 0 1 -26.617 3.553c-6.493 0-12.821-.639-18.971-1.82 12.851 40.122 50.115 69.319 94.296 70.135-34.549 27.089-78.07 43.224-125.371 43.224a204.9 204.9 0 0 1 -24.078-1.399c44.674 28.645 97.72 45.359 154.734 45.359" />
				</svg>
			</a>
			{/* GitHub */}
			<a
				href="https://github.com/daichi2mori"
				target="_blank"
				rel="noreferrer"
				class={
					"p-6 rounded-3xl aspect-square bg-github-gradient flex items-center justify-center transform hover:scale-105 transition duration-200 ease-in-out"
				}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1000 1000"
					class="fill-[#ffffff] w-16 md:w-32"
				>
					<title>github</title>
					<path d="M500,121c-214.58,0-388.59,174-388.59,388.58,0,171.69,111.35,317.35,265.74,368.74,19.42,3.59,26.56-8.43,26.56-18.7,0-9.26-.37-39.88-.53-72.35-108.11,23.51-130.92-45.84-130.92-45.84-17.68-44.92-43.15-56.86-43.15-56.86-35.25-24.12,2.66-23.63,2.66-23.63,39,2.75,59.57,40,59.57,40,34.66,59.41,90.9,42.23,113.08,32.3,3.49-25.11,13.56-42.25,24.67-52-86.31-9.83-177-43.15-177-192,0-42.42,15.18-77.09,40-104.3-4-9.79-17.34-49.31,3.76-102.84,0,0,32.63-10.44,106.89,39.83a368.75,368.75,0,0,1,194.61,0c74.17-50.27,106.75-39.83,106.75-39.83,21.15,53.53,7.85,93,3.81,102.84,24.92,27.21,40,61.87,40,104.3C747.9,638.55,657,671.41,570.47,681c13.94,12.06,26.36,35.71,26.36,72,0,52-.45,93.84-.45,106.64,0,10.34,7,22.46,26.69,18.64,154.31-51.44,265.52-197,265.52-368.68C888.59,295,714.61,121,500,121" />
				</svg>
			</a>
		</div>,
	);
});
