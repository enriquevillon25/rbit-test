import { businessInfo } from "./businessInfo";
import { defaultLandingContent, type LandingContent } from "i18n/content";

export type JsonLdSchema = Record<string, unknown>;

function buildServiceCatalog(content: LandingContent): JsonLdSchema[] {
  return content.services.map((service) => ({
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

export function buildLocalBusinessJsonLd(
  content: LandingContent = defaultLandingContent
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": ["ComputerStore", "LocalBusiness"],
    "@id": `${businessInfo.url}#business`,
    name: businessInfo.name,
    alternateName: businessInfo.shortName,
    url: businessInfo.url,
    image: businessInfo.imageUrl,
    logo: businessInfo.logoUrl,
    description: content.metadata.description,
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
    serviceType: content.services.map((service) => service.title),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: content.sections.servicesTitle,
      itemListElement: buildServiceCatalog(content),
    },
  };
}

export function buildWebsiteJsonLd(
  content: LandingContent = defaultLandingContent
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${businessInfo.url}#website`,
    url: businessInfo.url,
    name: businessInfo.name,
    inLanguage: content.htmlLang,
    publisher: {
      "@id": `${businessInfo.url}#business`,
    },
  };
}

export function buildFaqJsonLd(
  content: LandingContent = defaultLandingContent
): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildLandingJsonLd(
  content: LandingContent = defaultLandingContent
): JsonLdSchema[] {
  return [
    buildLocalBusinessJsonLd(content),
    buildWebsiteJsonLd(content),
    buildFaqJsonLd(content),
  ];
}
