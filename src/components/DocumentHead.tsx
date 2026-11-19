import { useEffect } from "react";
import { useLanguage } from "../i18n/useLanguage";

export type Page = "home" | "blog" | "notFound";

// Link previews come from the static tags in index.html; this only keeps the
// tab title and description in sync with the current page and language.
export default function DocumentHead({ page }: { page: Page }) {
  const { t } = useLanguage();
  const { title, description } = t.meta[page];

  useEffect(() => {
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", description);
  }, [title, description]);

  return null;
}
