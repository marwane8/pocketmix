import type { MetaFunction } from "@remix-run/node";
import HomeGallery from "~/components/home-gallery";
import Hero from "../components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Miloud Photography" },
    {
      name: "Miloud Photography Home Page",
      content:
        "Full-Service Photography Studio in Astoria, New York for Weddings, Engagements, Social Events, and Passport Photos",
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
