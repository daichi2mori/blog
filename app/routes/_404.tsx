import type { NotFoundHandler } from "hono";

const NotFound: NotFoundHandler = (c) => {
	return c.render(
		<>
			<h1>Sorry, Not Found...</h1>
		</>,
	);
};

export default NotFound;
