import React from "react";
import Head from "next/head";
import { buildLandingJsonLd, landingSeo } from "./metadata";

function SeoHead(): JSX.Element {
  const jsonLd = buildLandingJsonLd();

  return (
    <Head>
      <title>{landingSeo.title}</title>
      <meta name="description" content={landingSeo.description} />
      <meta name="keywords" content={landingSeo.keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={landingSeo.businessName} />
      <link rel="canonical" href={landingSeo.canonicalUrl} />

      <meta property="og:site_name" content={landingSeo.siteName} />
      <meta property="og:locale" content={landingSeo.locale} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={landingSeo.canonicalUrl} />
      <meta property="og:title" content={landingSeo.title} />
      <meta property="og:description" content={landingSeo.description} />
      <meta property="og:image" content={landingSeo.imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={landingSeo.title} />
      <meta name="twitter:description" content={landingSeo.description} />
      <meta name="twitter:image" content={landingSeo.imageUrl} />

      {jsonLd.map((schema, index) => (
        <script
          key={index.toString()}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}

export default SeoHead;
