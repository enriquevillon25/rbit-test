import React from "react";
import Head from "next/head";
import { businessInfo } from "seo/businessInfo";
import { getServicePageUrl, type ServicePageData } from "seo/servicePages";

interface ServiceSeoHeadProps {
  service: ServicePageData;
}

function ServiceSeoHead({ service }: ServiceSeoHeadProps): JSX.Element {
  const canonicalUrl = getServicePageUrl(service);

  return (
    <Head>
      <title>{service.title}</title>
      <meta name="description" content={service.description} />
      <meta
        name="keywords"
        content={[service.primaryKeyword, ...service.relatedKeywords].join(", ")}
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={businessInfo.name} />
      <meta httpEquiv="content-language" content="es-ES" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es-ES" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      <meta property="og:site_name" content={businessInfo.name} />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={service.title} />
      <meta property="og:description" content={service.description} />
      <meta
        property="og:image"
        content={new URL(service.image, businessInfo.url).toString()}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={service.title} />
      <meta name="twitter:description" content={service.description} />
      <meta
        name="twitter:image"
        content={new URL(service.image, businessInfo.url).toString()}
      />
    </Head>
  );
}

export default ServiceSeoHead;
