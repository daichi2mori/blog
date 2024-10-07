import { Link, Script } from "honox/server";
import { CustomScript } from "./customScript";
import { useRequestContext } from "hono/jsx-renderer";
import { SiteConfig } from "site.config";

export const CustomHead = ({
  title,
  desc,
  slug,
}: {
  title: string | undefined;
  desc: string | undefined;
  slug: string | undefined;
}) => {
  const c = useRequestContext();
  const currentUrl = "https://daichi2mori.com";
  const pageTitle = title ? `${title} - ${SiteConfig.blogName}` : SiteConfig.blogName;
  const description = desc ?? SiteConfig.description;
  const ogpPath = slug ? `ogps/${slug}.png` : "ogp.png";

  return (
    <>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:image" content={`${currentUrl}/${ogpPath}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@daichi2mori" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${currentUrl}/${ogpPath}`} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
        rel="stylesheet"
      />
      <CustomScript src="/app/theme.ts" nonce={c.get("secureHeadersNonce")} />
      <Link href="/app/styles/style.css" rel="stylesheet" />
      <Script src="/app/client.ts" async nonce={c.get("secureHeadersNonce")} />
    </>
  );
};
