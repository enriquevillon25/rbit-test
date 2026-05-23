const WHATSAPP_PHONE = "34666266295";
const DEFAULT_SUPPORT_MESSAGE =
  "Hola, tengo un problema técnico, ¿podrían ayudarme?";

export function buildWhatsAppUrl(
  phone = WHATSAPP_PHONE,
  message = DEFAULT_SUPPORT_MESSAGE
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function handleWhatsApp(): void {
  if (typeof window === "undefined") {
    return;
  }

  window.open(buildWhatsAppUrl(), "_blank");
}
