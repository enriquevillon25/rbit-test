import React from "react";
import Head from "next/head";
import { supportedLanguages } from "i18n/languages";
import { getLocalizedContent, type LandingContent } from "i18n/content";

interface SeoHeadProps {
  content: LandingContent;
}

function SeoHead({ content }: SeoHeadProps): JSX.Element {
  const { metadata } = content;
  const currentLanguage = supportedLanguages.find(
    (language) => language.code === content.language
  );
  const alternateLanguages = supportedLanguages.filter(
    (language) => language.code !== content.language
  );

  return (
    <Head>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="keywords" content={metadata.keywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={metadata.businessName} />
      <meta
        httpEquiv="content-language"
        content={currentLanguage?.htmlLang || content.htmlLang}
      />
      <link rel="canonical" href={metadata.canonicalUrl} />
      {supportedLanguages.map((language) => {
        const localizedContent = getLocalizedContent(language.code);

        return (
          <link
            key={`alternate-${language.code}`}
            rel="alternate"
            hrefLang={language.htmlLang}
            href={localizedContent.metadata.canonicalUrl}
          />
        );
      })}
      <link
        key="alternate-x-default"
        rel="alternate"
        hrefLang="x-default"
        href={getLocalizedContent("es").metadata.canonicalUrl}
      />

      <meta property="og:site_name" content={metadata.siteName} />
      <meta property="og:locale" content={metadata.locale} />
      {alternateLanguages.map((language) => (
        <meta
          key={language.code}
          property="og:locale:alternate"
          content={getLocalizedContent(language.code).metadata.locale}
        />
      ))}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metadata.canonicalUrl} />
      <meta property="og:title" content={metadata.title} />
      <meta
        property="og:description"
        content={metadata.description}
      />
      <meta property="og:image" content={metadata.imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metadata.title} />
      <meta
        name="twitter:description"
        content={metadata.description}
      />
      <meta name="twitter:image" content={metadata.imageUrl} />
    </Head>
  );
}

export default SeoHead;
