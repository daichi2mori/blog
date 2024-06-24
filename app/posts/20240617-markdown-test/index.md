---
title: Markdownテスト
description: 個人ブログを始めました。ここでmarkdownのテストをしています。
published: 2024-06-17
modified: 2024-06-24
---

# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5

[Twitterリンク](https://x.com/daichi2mori)

![Image](/static/profile.png)

> Blockquote

- List
- List
- List

1. One
2. Two
3. Three

`Inline code` with backticks

*Italic*

**Bold**

```ts
// code block
console.log('code');
```

```tsx showLineNumbers title="honox/markdown.tsx"
import type { Meta } from '../types'

export default function Top() {
  const posts = import.meta.glob<{ frontmatter: Meta }>('./posts/*.mdx', {
    eager: true,
  })
  return (
    <div>
      <h2>Posts</h2>
      <ul class='article-list'>
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <li>
                <a href={`${id.replace(/\.mdx$/, '')}`}>{module.frontmatter.title}</a>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}
```

> [!NOTE]
> test

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
