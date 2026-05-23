export interface BusinessAddress {
  streetAddress?: string;
  addressLocality: string;
  postalCode?: string;
  addressRegion?: string;
  addressCountry: string;
}

export interface BusinessContact {
  telephone?: string;
  email?: string;
}

export interface BusinessInfo {
  name: string;
  shortName: string;
  url: string;
  logoUrl: string;
  imageUrl: string;
  locale: string;
  language: string;
  priceRange: string;
  address: BusinessAddress;
  contact: BusinessContact;
  areaServed: string[];
  openingHours: string[];
  sameAs: string[];
}

// Datos centralizados del negocio para metadata, JSON-LD y contenido SEO local.
export const businessInfo: BusinessInfo = {
  name: "RBIT Informática i Telecomunicaciones",
  shortName: "RBIT Informática",
  url: "https://www.rbitinformatica.com/",
  logoUrl: "https://www.rbitinformatica.com/images/logo-rbit.jpg",
  imageUrl: "https://www.rbitinformatica.com/images/logo-rbit.jpg",
  locale: "es_ES",
  language: "es-ES",
  priceRange: "€€",
  address: {
    streetAddress: "Carrer de Bailèn, 109, Local 2",
    addressLocality: "Barcelona",
    postalCode: "08009",
    addressRegion: "Barcelona",
    addressCountry: "ES",
  },
  contact: {
    telephone: "+34666266295",
    email: "jvillonl@rbitinformatica.com",
  },
  areaServed: ["Barcelona", "Eixample", "Bailèn"],
  openingHours: ["Mo-Sa 10:00-20:00"],
  sameAs: [
    // TODO: Añadir perfiles oficiales cuando estén confirmados.
  ],
};
