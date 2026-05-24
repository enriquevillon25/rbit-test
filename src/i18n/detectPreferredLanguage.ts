import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  isSupportedLanguage,
  type SupportedLanguage,
} from "./languages";

const browserLanguagePriority: SupportedLanguage[] = ["ca", "en", "es"];

function normalizeLanguage(language: string): string {
  return language.toLowerCase().split("-")[0];
}

export function getStoredLanguagePreference(): SupportedLanguage | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

  return storedLanguage && isSupportedLanguage(storedLanguage)
    ? storedLanguage
    : null;
}

export function detectBrowserLanguage(
  languages: readonly string[] = []
): SupportedLanguage {
  const normalizedLanguages = languages.map(normalizeLanguage);

  return (
    browserLanguagePriority.find((language) =>
      normalizedLanguages.includes(language)
    ) || DEFAULT_LANGUAGE
  );
}

export function detectPreferredLanguage(): SupportedLanguage {
  const storedLanguage = getStoredLanguagePreference();

  if (storedLanguage) {
    return storedLanguage;
  }

  if (typeof navigator === "undefined") {
    return DEFAULT_LANGUAGE;
  }

  const browserLanguages =
    navigator.languages && navigator.languages.length > 0
      ? navigator.languages
      : [navigator.language];

  return detectBrowserLanguage(browserLanguages);
}
