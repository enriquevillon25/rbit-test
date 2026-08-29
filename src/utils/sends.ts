import { trackWhatsAppLead, type WhatsAppLeadEvent } from "lib/analytics/events";

const WHATSAPP_PHONE = "34666266295";
const DEFAULT_SUPPORT_MESSAGE =
  "Hola, tengo un problema técnico, ¿podrían ayudarme?";

export function buildWhatsAppUrl(
  phone = WHATSAPP_PHONE,
  message = DEFAULT_SUPPORT_MESSAGE
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function isWhatsAppLeadEvent(value: unknown): value is WhatsAppLeadEvent {
  return (
    typeof value === "object" &&
    value !== null &&
    "ctaLocation" in value
  );
}

export function handleWhatsApp(tracking?: unknown): void {
  if (typeof window === "undefined") {
    return;
  }

  if (isWhatsAppLeadEvent(tracking)) {
    void trackWhatsAppLead(tracking);
  }

  window.open(buildWhatsAppUrl(), "_blank");
}
