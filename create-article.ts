import { cancel, isCancel, outro, text } from "@clack/prompts";
import { $, write } from "bun";

// slug入力
const slug = await text({
	message: "記事のslugを入力してください",
	placeholder: "honox-saiko", // デフォルト値
	validate(value) {
		// バリデーション
		if (value.length < 5) return "slugが短すぎます";
	},
});

if (isCancel(slug)) {
	cancel("goodbye");
}

const today = new Date()
	.toLocaleDateString("ja-JP", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	})
	.replaceAll("/", "-");

const dirname = `${today.replaceAll("-", "")}-${String(slug)}`;

// ディレクトリとファイルを作成
await $`mkdir ./app/posts/${dirname}`;
await $`touch ./app/posts/${dirname}/index.md`;

const frontmatter = `---
title:
description:
published:
modified:
---
`;

await write(`./app/posts/${dirname}/index.md`, frontmatter);

outro(`./app/posts/${dirname}/index.md is created`);
