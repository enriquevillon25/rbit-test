import commonES from "../locales/en/common.json";

type TranslationDictionary = Record<string, unknown>;

interface I18nAdapter {
  language: string;
  changeLanguage: () => void;
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

export function useTranslation(_namespace?: string): TranslationAdapter {
  const t = (key: string): string => {
    const value = resolveTranslation(commonES, key);
    return typeof value === "string" ? value : key;
  };

  return {
    t,
    i18n: {
      language: "es",
      changeLanguage: () => {},
    },
  };
}
