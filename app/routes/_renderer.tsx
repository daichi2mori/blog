import { CustomScript } from "app/components/custom-script";
import Footer from "app/components/footer";
import Header from "app/components/header";
import { Style } from "hono/css";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link, Script } from "honox/server";
import { SiteConfig } from "site.config";

export default jsxRenderer(({ children, title, desc }) => {
	const pageTitle = title
		? `${title} - ${SiteConfig.blogName}`
		: SiteConfig.blogName;
	const description = desc ?? SiteConfig.description;

	return (
		<html lang="ja">
			<head>
				<meta charset="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{pageTitle}</title>
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
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
