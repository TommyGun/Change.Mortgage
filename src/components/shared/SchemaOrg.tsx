import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SchemaOrgProps {
  type: 'consumer' | 'broker' | 'landing';
}

export function SchemaOrg({ type }: SchemaOrgProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "change.mortgage",
    "url": "https://change.mortgage"
  };

  const consumerSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Mortgage Switching Service",
    "provider": {
      "@type": "Organization",
      "name": "change.mortgage"
    },
    "description": "Find better mortgage rates and switch providers easily. Save thousands on your monthly payments.",
    "areaServed": "United States",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mortgage Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mortgage Rate Comparison"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mortgage Switching Service"
          }
        }
      ]
    }
  };

  const brokerSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "change.mortgage Broker Platform",
    "applicationCategory": "BusinessApplication",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD"
    },
    "description": "Professional mortgage broker platform for processing applications and managing client relationships."
  };

  const schema = type === 'consumer' ? consumerSchema : 
                 type === 'broker' ? brokerSchema : 
                 baseSchema;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}