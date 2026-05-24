import {
  DEFAULT_LANGUAGE,
  isSupportedLanguage,
  type SupportedLanguage,
} from "./languages";

export const localizedRoutes: Record<SupportedLanguage, string> = {
  es: "/",
  ca: "/ca/",
  en: "/en/",
};

export function getLanguageFromPath(path?: string): SupportedLanguage {
  const normalizedPath = path || "/";
  const firstSegment = normalizedPath.split("?")[0].split("#")[0].split("/")[1];

  return firstSegment && isSupportedLanguage(firstSegment)
    ? firstSegment
    : DEFAULT_LANGUAGE;
}

export function getLocalizedRoute(language: SupportedLanguage): string {
  return localizedRoutes[language];
}

export function getCanonicalUrl(baseUrl: string, language: SupportedLanguage): string {
  const route = localizedRoutes[language];

  return new URL(route, baseUrl).toString();
}
