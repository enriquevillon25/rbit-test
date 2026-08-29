import { logAnalyticsEvent } from "./firebaseAnalytics";

export const analyticsEvents = {
  homeScreenView: "screen_view",
  whatsappLead: "generate_lead",
} as const;

export type HomeCtaLocation =
  | "home_hero"
  | "home_local_service"
  | "home_final_cta";

export interface HomeScreenViewEvent {
  language: string;
}

export interface WhatsAppLeadEvent {
  ctaLocation: HomeCtaLocation;
  language?: string;
  label?: string;
}

export function trackHomeScreenView({
  language,
}: HomeScreenViewEvent): Promise<void> {
  return logAnalyticsEvent(analyticsEvents.homeScreenView, {
    firebase_screen: "home",
    firebase_screen_class: "LandingPage",
    language,
  });
}

export function trackWhatsAppLead({
  ctaLocation,
  language = "unknown",
  label = "unknown",
}: WhatsAppLeadEvent): Promise<void> {
  return logAnalyticsEvent(analyticsEvents.whatsappLead, {
    method: "whatsapp",
    content_type: "cta",
    item_id: ctaLocation,
    cta_location: ctaLocation,
    language,
    label,
  });
}
