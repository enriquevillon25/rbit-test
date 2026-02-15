export const handleWhatsApp = () => {
  const phone = "34666266295"; // sin el +
  const message =
    "Hola, tengo problema técnico con mi curso, ¿podrían ayudarme?";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
};
