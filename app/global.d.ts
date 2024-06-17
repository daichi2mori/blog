import {} from "hono";

type Head = {
	title?: string;
	desc?: string;
};

declare module "hono" {
	interface Env {
		Variables: { "/public" };
		// biome-ignore lint/complexity/noBannedTypes: <explanation>
		Bindings: {};
	}
	interface ContextRenderer {
		// biome-ignore lint/style/useShorthandFunctionType: <explanation>
		(
			content: string | Promise<string>,
			head?: Head,
		): Response | Promise<Response>;
	}
}
