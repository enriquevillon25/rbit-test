import { useTranslation } from "lib/useTranslation";
import { getLocalizedContent } from "./content";

export function useLocalizedContent() {
  const { i18n } = useTranslation("common");

  return getLocalizedContent(i18n.language);
}
