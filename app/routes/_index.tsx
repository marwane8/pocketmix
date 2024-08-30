import type { MetaFunction } from "@remix-run/node";
import Gallery from "~/components/gallery/gallery";
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
      <Gallery />
    </div>
  );
}
