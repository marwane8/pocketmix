export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const captialCase = (str: string) => {
  if (!str) return "";
  const words = str.split("_");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
};

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Miloud Photography",
  description:
    "Full-Service Photography Studio in Astoria, New York for Weddings, Engagements, Social Events, and Passport Photos",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Astoria",
    addressRegion: "NY",
    postalCode: "11103",
    streetAddress: "30-10 34th St",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "14",
  },
  openingHours: ["Mo-Sa 10:00-19:00"],
  priceRange: "$$",
  telephone: "(718) 777-1049",
  url: "http://www.miloudphotography.com",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Photography Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wedding Photography",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Studio Photography",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Event Photography",
        },
      },
    ],
  },
};
