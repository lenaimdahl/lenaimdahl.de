import { useLanguage } from "../i18n/useLanguage";

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  const nextLanguage = language === "de" ? "en" : "de";

  return (
    <button
      type="button"
      className="language-button"
      aria-label={t.nav.switchLanguage}
      title={t.nav.switchLanguage}
      lang={nextLanguage}
      onClick={() => setLanguage(nextLanguage)}
    >
      {nextLanguage.toUpperCase()}
    </button>
  );
}
