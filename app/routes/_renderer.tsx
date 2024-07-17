import { CustomScript } from "app/components/customScript";
import Footer from "app/components/footer";
import Header from "app/components/header";
import { Style } from "hono/css";
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { SiteConfig } from "site.config";

export default jsxRenderer(({ children, title, desc, slug }) => {
	const c = useRequestContext();
	const currentUrl = c.req.url;
	const pageTitle = title
		? `${title} - ${SiteConfig.blogName}`
		: SiteConfig.blogName;
	const description = desc ?? SiteConfig.description;
	const ogpPath = slug ? `ogps/${slug}.png` : "/ogp.png";

	return (
		<html lang="ja">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{pageTitle}</title>
				<meta name="description" content={description} />
				<meta property="og:url" content={currentUrl} />
				<meta property="og:type" content="article" />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={description} />
				<meta property="og:site_name" content={pageTitle} />
				<meta
					property="og:image"
					content={`https://blog.daichi2mori.com/${ogpPath}`}
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@daichi2mori" />
				<meta name="twitter:title" content={pageTitle} />
				<meta name="twitter:description" content={description} />
				<meta
					name="twitter:image"
					content={`https://blog.daichi2mori.com/${ogpPath}`}
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					rel="preload"
					as="style"
					fetchpriority="high"
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
					media="print"
					onload='this.media="all"'
				/>
				<CustomScript src="/app/theme.ts" />
				<Link href="/app/styles/style.css" rel="stylesheet" />
				<Script src="/app/client.ts" async />
				<Style />
			</head>
			<body>
				<div
					class={
						"grid grid-rows-[auto_1fr_auto] gap-4 min-h-dvh max-w-[1000px] my-0 mx-auto md:px-4"
					}
				>
					<Header />
					{/* <Sidebar /> */}
					<main class={"min-w-0"}>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
});
