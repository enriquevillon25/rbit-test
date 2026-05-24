import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  getLanguageOption,
  isSupportedLanguage,
  type SupportedLanguage,
} from "i18n/languages";
import { getLocalizedContent } from "i18n/content";
import { getLanguageFromPath } from "i18n/routes";

type TranslationDictionary = Record<string, unknown>;

interface I18nAdapter {
  language: SupportedLanguage;
  changeLanguage: (language: SupportedLanguage) => void;
}

interface TranslationAdapter {
  t: (key: string) => string;
  i18n: I18nAdapter;
}

function resolveTranslation(
  dictionary: TranslationDictionary,
  key: string
): unknown {
  return key.split(".").reduce<unknown>((value, segment) => {
    if (value && typeof value === "object" && segment in value) {
      return (value as TranslationDictionary)[segment];
    }

    return undefined;
  }, dictionary);
}

function getStoredLanguage(): SupportedLanguage {
  if (typeof window === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  return storedLanguage && isSupportedLanguage(storedLanguage)
    ? storedLanguage
    : DEFAULT_LANGUAGE;
}

function applyDocumentLanguage(language: SupportedLanguage): void {
  if (typeof document === "undefined") {
    return;
  }

  const languageOption = getLanguageOption(language);
  document.documentElement.setAttribute("lang", languageOption.htmlLang);
  document.dir = "ltr";
}

function persistLanguage(language: SupportedLanguage): void {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  window.dispatchEvent(
    new CustomEvent("rbit-language-change", { detail: language })
  );
}

export function useTranslation(_namespace?: string): TranslationAdapter {
  const router = useRouter();
  const routeLanguage = getLanguageFromPath(router.asPath || router.pathname);
  const [language, setLanguage] = useState<SupportedLanguage>(routeLanguage);

  useEffect(() => {
    const nextLanguage = routeLanguage || getStoredLanguage();

    setLanguage(nextLanguage);
    applyDocumentLanguage(nextLanguage);

    const handleLanguageChange = (event: Event) => {
      const nextLanguage = (event as CustomEvent<SupportedLanguage>).detail;

      if (isSupportedLanguage(nextLanguage)) {
        setLanguage(nextLanguage);
        applyDocumentLanguage(nextLanguage);
      }
    };

    const handleStorageChange = (event: StorageEvent) => {
      if (
        event.key === LANGUAGE_STORAGE_KEY &&
        event.newValue &&
        isSupportedLanguage(event.newValue)
      ) {
        setLanguage(event.newValue);
        applyDocumentLanguage(event.newValue);
      }
    };

    window.addEventListener("rbit-language-change", handleLanguageChange);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("rbit-language-change", handleLanguageChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [routeLanguage]);

  const t = (key: string): string => {
    const dictionary = getLocalizedContent(language).translations;
    const fallbackDictionary = getLocalizedContent(DEFAULT_LANGUAGE).translations;
    const value =
      resolveTranslation(dictionary, key) ||
      resolveTranslation(fallbackDictionary, key);

    return typeof value === "string" ? value : key;
  };

  return {
    t,
    i18n: {
      language,
      changeLanguage: (nextLanguage: SupportedLanguage) => {
        setLanguage(nextLanguage);
        applyDocumentLanguage(nextLanguage);
        persistLanguage(nextLanguage);
      },
    },
  };
}
