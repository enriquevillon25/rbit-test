import { businessInfo } from "./businessInfo";
import { seoFaqs } from "./faqs";
import { primarySeoServices } from "./services";
import { landingSeoMetadata } from "./metadata";

export type JsonLdSchema = Record<string, unknown>;

function buildServiceCatalog(): JsonLdSchema[] {
  return primarySeoServices.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      serviceType: service.title,
      areaServed: businessInfo.areaServed,
      provider: {
        "@id": `${businessInfo.url}#business`,
      },
    },
  }));
}

export function buildLocalBusinessJsonLd(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": ["ComputerStore", "LocalBusiness"],
    "@id": `${businessInfo.url}#business`,
    name: businessInfo.name,
    alternateName: businessInfo.shortName,
    url: businessInfo.url,
    image: businessInfo.imageUrl,
    logo: businessInfo.logoUrl,
    description: landingSeoMetadata.description,
    telephone: businessInfo.contact.telephone,
    email: businessInfo.contact.email,
    priceRange: businessInfo.priceRange,
    sameAs: businessInfo.sameAs,
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    areaServed: businessInfo.areaServed.map((name) => ({
      "@type": name === "Barcelona" ? "City" : "AdministrativeArea",
      name,
    })),
    openingHours: businessInfo.openingHours,
    serviceType: primarySeoServices.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de reparación informática en Barcelona",
      itemListElement: buildServiceCatalog(),
    },
  };
}

export function buildWebsiteJsonLd(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessInfo.url}#website`,
    url: businessInfo.url,
    name: businessInfo.name,
    inLanguage: businessInfo.language,
    publisher: {
      "@id": `${businessInfo.url}#business`,
    },
  };
}

export function buildFaqJsonLd(): JsonLdSchema {
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
  return [buildLocalBusinessJsonLd(), buildWebsiteJsonLd(), buildFaqJsonLd()];
}
