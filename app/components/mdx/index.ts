import type { MDXComponents } from "mdx/types";
import Admonitions from "./admonitions";
import LinkCard from "./linkCard";

export const useMDXComponents = (): MDXComponents => {
	return {
		LinkCard,
		Admonitions,
	};
};
