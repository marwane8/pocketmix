import type { MetaFunction } from "@remix-run/node";
import Gallery from "~/components/gallery/gallery";

import heroCouple from "~/assets/hill-couple.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${heroCouple})` }}
        className="h-[700px] bg-cover bg-no-repeat bg-bottom"
      >
        <h1 className="text-4xl md:text-5xl h-2/3 px-10 py-24 cursor-default  ">
          Capture Life&apos;s Radiance, <br />
          With a{" "}
          <span className="font-extrabold italic text-accent">Click. </span>
        </h1>
      </div>
      <Gallery />
    </div>
  );
}
