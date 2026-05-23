import React from "react";
import Head from "next/head";
import { landingSeoMetadata } from "seo/metadata";

function SeoHead(): JSX.Element {
  return (
    <Head>
      <title>{landingSeoMetadata.title}</title>
      <meta name="description" content={landingSeoMetadata.description} />
      <meta name="keywords" content={landingSeoMetadata.keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={landingSeoMetadata.businessName} />
      <link rel="canonical" href={landingSeoMetadata.canonicalUrl} />

      <meta property="og:site_name" content={landingSeoMetadata.siteName} />
      <meta property="og:locale" content={landingSeoMetadata.locale} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={landingSeoMetadata.canonicalUrl} />
      <meta property="og:title" content={landingSeoMetadata.title} />
      <meta
        property="og:description"
        content={landingSeoMetadata.description}
      />
      <meta property="og:image" content={landingSeoMetadata.imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={landingSeoMetadata.title} />
      <meta
        name="twitter:description"
        content={landingSeoMetadata.description}
      />
      <meta name="twitter:image" content={landingSeoMetadata.imageUrl} />
    </Head>
  );
}

export default SeoHead;
