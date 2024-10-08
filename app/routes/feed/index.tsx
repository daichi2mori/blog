import { createRoute } from "honox/factory";
import { Feed } from "feed";
import { SiteConfig } from "site.config";
import { getPosts } from "app/lib/posts";

export default createRoute((c) => {
  const feed = new Feed({
    title: "d2mのブログ",
    id: SiteConfig.url,
    link: SiteConfig.url,
    description: "プログラミングや日常について投稿します",
    copyright: "© 2024 daichi2mori. All Rights Reserved.",
    language: "ja",
    generator: SiteConfig.url,
  });

  const posts = getPosts();

  for (const post of posts) {
    feed.addItem({
      title: post.title,
      description: post.description,
      date: new Date(post.published_at),
      id: post.slug,
      link: `https://daichi2mori.com/blog/${post.slug}`,
    });
  }

  const rss = feed.rss2();

  c.header("Content-Type", "text/xml");
  return c.body(rss);
});
