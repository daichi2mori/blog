import ThemeButton from "app/islands/themeButton";
import { SiteConfig } from "site.config";

const Header = () => {
	return (
		<header
			class={
				"h-16 flex items-center justify-between bg-card px-4 rounded-b-[16px]"
			}
		>
			<div class={"text-primary font-bold pl-2"}>
				<a href="/" class={"flex items-center justify-start gap-0.5"}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-home"
					>
						<title>Home Icon</title>
						<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
						<polyline points="9 22 9 12 15 12 15 22" />
					</svg>
					<h2>{SiteConfig.blogName}</h2>
				</a>
			</div>

			{/* <div class={"hidden md:flex items-center justify-center h-11 font-bold"}>
				<a
					href="/"
					class={
						"h-full px-5 grid place-items-center hover:bg-background hover:text-primary"
					}
				>
					Home
				</a>
				<a href="/about" class={"h-full px-5 grid place-items-center"}>
					About
				</a>
				<a href="/Blog" class={"h-full px-5 grid place-items-center"}>
					Blog
				</a>
				<a
					href="https://github.com/daichi2mori"
					target="_blank"
					rel="noreferrer"
					class={"h-full px-5 flex items-center justify-center gap-0.5"}
				>
					<span>GitHub</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="stroke-black/50 dark:stroke-white/50 mt-0.5"
					>
						<title>arrow</title>
						<path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
						<path d="m21 3-9 9" />
						<path d="M15 3h6v6" />
					</svg>
				</a>
			</div> */}

			<div class={"flex items-center justify-end gap-3"}>
				<ThemeButton />
				<a
					href="https://x.com/da1ch7"
					class={
						"w-11 h-11 grid place-items-center rounded-lg group duration-300 hover:bg-secondary"
					}
				>
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						class={
							"w-6 h-6 fill-gray-600 group-hover:fill-primary dark:fill-white/75"
						}
					>
						<title>X</title>
						<path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
					</svg>
				</a>
				<a
					href="https://github.com/daichi2mori"
					class={
						"w-11 h-11 grid place-items-center rounded-lg group duration-300 hover:bg-secondary"
					}
				>
					<svg
						role="img"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						class={
							"w-6 h-6 fill-gray-600 group-hover:fill-primary dark:fill-white/75"
						}
					>
						<title>GitHub</title>
						<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
					</svg>
				</a>
			</div>
		</header>
	);
};

export default Header;
