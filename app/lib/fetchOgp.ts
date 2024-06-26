import { JSDOM } from "jsdom";

type OgpData = {
	title?: string;
	description?: string;
	image?: string;
	host?: string;
	favicon?: string;
};

export const fetchOgp = async (url: string) => {
	const host = new URL(url).host;

	const ogpData: OgpData = {
		host,
		favicon: `https://www.google.com/s2/favicons?domain=${host}`,
	};

	try {
		const dom = await JSDOM.fromURL(url);
		const document = dom.window.document;

		const getMetaContent = (property: string) => {
			const element = document.querySelector(`meta[property='${property}']`);
			return element?.getAttribute("content") || undefined;
		};

		ogpData.title = getMetaContent("og:title");
		ogpData.description = getMetaContent("og:description");
		ogpData.image = getMetaContent("og:image");

		if (!ogpData.title) {
			ogpData.title = document.querySelector("title")?.textContent || undefined;
		}

		if (!ogpData.description) {
			ogpData.description =
				document
					.querySelector('meta[name="description"]')
					?.getAttribute("content") || undefined;
		}

		return ogpData;
	} catch (e) {
		if (e instanceof Error) {
			console.error(`Error fetching OGP data: ${e.message}`);
		} else {
			console.error("An unknown error occurred while fetching OGP data.");
		}
		return {};
	}
};
