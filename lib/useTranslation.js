import commonEN from "public/locales/en/common.json";

export function useTranslation(ns) {
  const t = (key) => {
    const keys = key.split(".");
    let value = commonEN;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const i18n = {
    language: "en",
    changeLanguage: () => {},
  };

  return { t, i18n };
}
