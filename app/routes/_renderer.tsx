import { CustomScript } from "app/components/customScript";
import Footer from "app/components/footer";
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
				<meta property="og:type" content="website" />
				<meta property="og:title" content={pageTitle} />
				<meta property="og:description" content={description} />
				<meta property="og:site_name" content={pageTitle} />
				<meta property="og:image" content={`${currentUrl}/${ogpPath}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@daichi2mori" />
				<meta name="twitter:title" content={pageTitle} />
				<meta name="twitter:description" content={description} />
				<meta name="twitter:image" content={`${currentUrl}/${ogpPath}`} />
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
					rel="stylesheet"
				/>
				<CustomScript src="/app/theme.ts" nonce={c.get("secureHeadersNonce")} />
				<Link href="/app/styles/style.css" rel="stylesheet" />
				<Script
					src="/app/client.ts"
					async
					nonce={c.get("secureHeadersNonce")}
				/>
				<Style />
			</head>
			<body>
				<div
					class={
						"grid grid-rows-[1fr_auto] gap-6 min-h-dvh max-w-[600px] mx-auto"
					}
				>
					<main class={"min-w-0"}>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
});
