export type SupportedLanguage = "es" | "ca" | "en";

export interface LanguageOption {
  code: SupportedLanguage;
  label: string;
  nativeLabel: string;
  shortLabel: string;
  htmlLang: string;
}

export const DEFAULT_LANGUAGE: SupportedLanguage = "es";
export const LANGUAGE_STORAGE_KEY = "rbit-language";

export const supportedLanguages: LanguageOption[] = [
  {
    code: "es",
    label: "Español",
    nativeLabel: "Español",
    shortLabel: "ES",
    htmlLang: "es-ES",
  },
  {
    code: "ca",
    label: "Catalán",
    nativeLabel: "Català",
    shortLabel: "CA",
    htmlLang: "ca-ES",
  },
  {
    code: "en",
    label: "Inglés",
    nativeLabel: "English",
    shortLabel: "EN",
    htmlLang: "en",
  },
];

export function isSupportedLanguage(value: string): value is SupportedLanguage {
  return supportedLanguages.some((language) => language.code === value);
}

export function getLanguageOption(language: SupportedLanguage): LanguageOption {
  return (
    supportedLanguages.find((option) => option.code === language) ||
    supportedLanguages[0]
  );
}
