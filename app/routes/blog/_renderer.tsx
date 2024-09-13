import { CustomHead } from "app/components/customHead";
import Footer from "app/components/footer";
import Header from "app/components/header";
import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, title, desc, slug }) => {
	return (
		<html lang="ja">
			<head>
				<CustomHead title={title} desc={desc} slug={slug} />
			</head>
			<body>
				<div
					class={
						"grid grid-rows-[auto_1fr_auto] gap-4 min-h-dvh max-w-[1000px] my-0 mx-auto md:px-4"
					}
				>
					<Header />
					<main class={"min-w-0"}>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
});
