import { useEffect } from "react";
import type { SupportedLanguage } from "i18n/languages";
import { trackHomeScreenView } from "lib/analytics/events";

interface HomeAnalyticsProps {
  language: SupportedLanguage;
}

function HomeAnalytics({ language }: HomeAnalyticsProps): null {
  useEffect(() => {
    void trackHomeScreenView({ language });
  }, [language]);

  return null;
}

export default HomeAnalytics;
