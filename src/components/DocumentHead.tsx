import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Translation } from "../i18n/translations";

type Page = "home" | "blog";

function getPageMeta(page: Page, t: Translation) {
  return page === "home"
    ? {
        title: t.meta.homeTitle,
        description: t.meta.homeDescription,
        url: "https://lenaimdahl.de/",
      }
    : {
        title: t.meta.blogTitle,
        description: t.meta.blogDescription,
        url: "https://lenaimdahl.de/blog",
      };
}

function setMeta(
  attribute: "name" | "property",
  name: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${name}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, name);
    document.head.append(element);
  }

  element.content = content;
}

function setFavicon() {
  let favicon = document.head.querySelector<HTMLLinkElement>('link[rel="icon"]');

  if (!favicon) {
    favicon = document.createElement("link");
    favicon.rel = "icon";
    document.head.append(favicon);
  }

  favicon.href =
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='22' fill='%23c2416f'/><text x='50' y='68' text-anchor='middle' font-family='monospace' font-weight='700' font-size='50' fill='white'>LI</text></svg>";
}

export default function DocumentHead({ page }: { page: Page }) {
  const { t } = useLanguage();

  useEffect(() => {
    const meta = getPageMeta(page, t);
    document.title = meta.title;
    setMeta("name", "description", meta.description);
    setMeta("name", "author", "Lena Imdahl");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", meta.title);
    setMeta("name", "twitter:description", meta.description);
    setMeta("name", "twitter:image", "https://lenaimdahl.de/img/lenaimdahl.jpg");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", meta.url);
    setMeta("property", "og:image", "https://lenaimdahl.de/img/lenaimdahl.jpg");
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:site_name", "Lena Imdahl");
    setFavicon();
  }, [page, t]);

  return null;
}
