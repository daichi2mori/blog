import Footer from "app/components/Footer";
import Header from "app/components/Header";
import { CustomHead } from "app/components/customHead";
import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children }) => {
	return (
		<html lang="ja">
			<head>
				<CustomHead />
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
