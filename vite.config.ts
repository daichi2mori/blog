import ssg from "@hono/vite-ssg";
import honox from "honox/vite";
import client from "honox/vite/client";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => {
	if (mode === "client") {
		return {
			build: {
				manifest: true,
				rollupOptions: {
					input: ["/app/globals.css"],
				},
			},
			plugins: [client()],
		};
	}

	return {
		build: {
			emptyOutDir: false,
		},
		plugins: [tsconfigPaths(), honox(), ssg({ entry })],
	};
});
