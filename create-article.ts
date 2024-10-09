import { cancel, isCancel, outro, select, text } from "@clack/prompts";
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

// 作成時の日付を取得
const today = new Date()
  .toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
  .replaceAll("/", "-");

// 拡張子選択
const extension = await select({
  message: "作成するファイル拡張子を選択してください",
  options: [
    { value: "md", label: "md" },
    { value: "mdx", label: "mdx" },
  ],
});

if (isCancel(extension)) {
  cancel("goodbye");
}

const dirname = `${today.replaceAll("-", "")}-${String(slug)}`;
const createFilePath = `./posts/${dirname}/index.${extension}`;
const frontmatter = `---
title:
description:
published_at: '${today}'
modified:
published: false
---
`;

await $`mkdir ./posts/${dirname}`;
await $`touch ${createFilePath}`;
await write(createFilePath, frontmatter);

outro(`./posts/${dirname}/index.md is created`);
