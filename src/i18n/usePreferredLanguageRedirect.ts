import { useEffect } from "react";
import { useRouter } from "next/router";
import { DEFAULT_LANGUAGE } from "./languages";
import { detectPreferredLanguage, getStoredLanguagePreference } from "./detectPreferredLanguage";
import { getLocalizedRoute } from "./routes";

export function usePreferredLanguageRedirect(): void {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname !== "/") {
      return;
    }

    const storedLanguage = getStoredLanguagePreference();
    const preferredLanguage = detectPreferredLanguage();

    if (!storedLanguage && preferredLanguage !== DEFAULT_LANGUAGE) {
      router.replace(getLocalizedRoute(preferredLanguage));
    }
  }, [router]);
}
