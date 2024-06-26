import type { Manifest } from "vite";

type Options = {
	src: string;
	async?: boolean;
	prod?: boolean;
	manifest?: Manifest;
	nonce?: string;
	type?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomScript = (options: Options) => {
	const src = options.src;
	const type = !options.type ? undefined : "module";
	if (options.prod ?? import.meta.env.PROD) {
		let manifest: Manifest | undefined = options.manifest;
		if (!manifest) {
			const MANIFEST = import.meta.glob<{ default: Manifest }>(
				"/dist/.vite/manifest.json",
				{
					eager: true,
				},
			);
			for (const [, manifestFile] of Object.entries(MANIFEST)) {
				if (manifestFile.default) {
					manifest = manifestFile.default;
					break;
				}
			}
		}
		if (manifest) {
			const scriptInManifest = manifest[src.replace(/^\//, "")];
			if (scriptInManifest) {
				return (
					<script
						type={type}
						async={!!options.async}
						src={`/${scriptInManifest.file}`}
						nonce={options.nonce}
					/>
				);
			}
		}
		return <></>;
	}

	return (
		<script
			type={type}
			async={!!options.async}
			src={src}
			nonce={options.nonce}
		/>
	);
};
