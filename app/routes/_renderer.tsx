import { CustomHead } from "app/components/customHead";
import Footer from "app/components/footer";
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
