import { useEffect, useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "react-router-dom";
import { translations, type Language } from "./translations";
import { LanguageContext } from "./useLanguage";

const STORAGE_KEY = "language";
const URL_PARAM = "lang";
const DEFAULT_LANGUAGE: Language = "de";

function isLanguage(value: string | null): value is Language {
  return value !== null && Object.hasOwn(translations, value);
}

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) {
      return stored;
    }
  } catch {
    // Storage can be blocked (private mode); fall back to the default.
  }
  return DEFAULT_LANGUAGE;
}

// A ?lang=en in the URL wins, so an English link can be shared directly.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlLanguage = searchParams.get(URL_PARAM);
  const [language, setLanguage] = useState<Language>(() =>
    isLanguage(urlLanguage) ? urlLanguage : readStoredLanguage(),
  );

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Not critical: the choice just won't be remembered.
    }
  }, [language]);

  // Keep ?lang in the URL in sync, also after navigating between pages.
  useEffect(() => {
    const wanted = language === DEFAULT_LANGUAGE ? null : language;
    if (urlLanguage === wanted) {
      return;
    }
    setSearchParams(
      (params) => {
        if (wanted) {
          params.set(URL_PARAM, wanted);
        } else {
          params.delete(URL_PARAM);
        }
        return params;
      },
      { replace: true },
    );
  }, [language, urlLanguage, setSearchParams]);

  const value = useMemo(
    () => ({ language, setLanguage, t: translations[language] }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
