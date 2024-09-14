import type { MetaFunction } from "@remix-run/node";
import HomeGallery from "~/components/home-gallery";
import Hero from "../components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
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
