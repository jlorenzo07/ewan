import Script from "next/script";

type SchemaProps = {
  schema: Record<string, any>;
};

export default function SchemaOrg({ schema }: SchemaProps) {
  return (
    <Script
      id={`schema-${schema["@type"]}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="afterInteractive"
    />
  );
}
