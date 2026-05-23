import { featuredServices, seoFaqs } from "data/siteContent";
import type { JsonLdSchema, LandingSeoMetadata } from "../types";

export const landingSeo: LandingSeoMetadata = {
  siteName: "RBIT Informática",
  businessName: "RBIT Informática i Telecomunicaciones",
  title:
    "Servicio técnico informático en Barcelona | Reparación de ordenadores, portátiles y móviles",
  description:
    "Servicio técnico informático en Barcelona para reparar ordenadores, portátiles, móviles, iPhone y MacBook. Diagnóstico, mantenimiento, recuperación de datos y asistencia profesional.",
  canonicalUrl: "https://www.rbitinformatica.com/",
  imageUrl: "https://www.rbitinformatica.com/images/logo-rbit.jpg",
  locale: "es_ES",
  phone: "+34666266295",
  email: "jvillonl@rbitinformatica.com",
  address: {
    streetAddress: "Carrer de Bailèn, 109, Local 2",
    addressLocality: "Barcelona",
    postalCode: "08009",
    addressCountry: "ES",
    addressRegion: "Barcelona",
  },
  keywords: [
    "servicio técnico informático Barcelona",
    "reparar ordenador Barcelona",
    "reparar portátil Barcelona",
    "reparación móviles Barcelona",
    "reparar iPhone Barcelona",
    "reparar MacBook Barcelona",
    "recuperación de datos Barcelona",
    "mantenimiento informático Barcelona",
  ],
};

function buildServiceOffers(): JsonLdSchema[] {
  return featuredServices.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.desc,
      areaServed: "Barcelona",
      provider: {
        "@type": "LocalBusiness",
        name: landingSeo.businessName,
      },
    },
  }));
}

function buildBusinessSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${landingSeo.canonicalUrl}#business`,
    name: landingSeo.businessName,
    alternateName: landingSeo.siteName,
    url: landingSeo.canonicalUrl,
    image: landingSeo.imageUrl,
    logo: landingSeo.imageUrl,
    description: landingSeo.description,
    telephone: landingSeo.phone,
    email: landingSeo.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      ...landingSeo.address,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Barcelona",
      },
      {
        "@type": "AdministrativeArea",
        name: "Eixample",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de reparación informática",
      itemListElement: buildServiceOffers(),
    },
  };
}

function buildWebsiteSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${landingSeo.canonicalUrl}#website`,
    url: landingSeo.canonicalUrl,
    name: landingSeo.siteName,
    inLanguage: "es-ES",
    publisher: {
      "@id": `${landingSeo.canonicalUrl}#business`,
    },
  };
}

function buildFaqSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildLandingJsonLd(): JsonLdSchema[] {
  return [buildBusinessSchema(), buildWebsiteSchema(), buildFaqSchema()];
}
