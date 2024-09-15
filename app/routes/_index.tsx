import type { MetaFunction } from "@remix-run/node";
import HomeGallery from "~/components/home-gallery";
import Hero from "../components/hero";
import { schemaMarkup } from "~/utils/js.util";

export const meta: MetaFunction = () => {
  return [
    { title: "Miloud Photography" },
    {
      name: "Miloud Photography Home Page",
      content:
        "Full-Service Photography Studio in Astoria, New York for Weddings, Engagements, Social Events, and Passport Photos",
      "script:ld+json": schemaMarkup,
    },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <HomeGallery />
    </div>
  );
}
