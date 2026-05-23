import React from "react";
import type { JsonLdSchema } from "seo/structuredData";

interface JsonLdProps {
  data: JsonLdSchema | JsonLdSchema[];
}

function JsonLd(props: JsonLdProps): JSX.Element {
  const { data } = props;
  const schemas = Array.isArray(data) ? data : [data];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index.toString()}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default JsonLd;
