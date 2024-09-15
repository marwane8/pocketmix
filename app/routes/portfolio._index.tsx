import { MetaFunction } from "@remix-run/react";
import PortfolioCard from "~/components/portfolio-card";

import pier from "~/assets/ny-wedding/0w-pier.jpg";
import sunset from "~/assets/italian-wedding/1w-sunset.jpg";
import sunset16 from "~/assets/sweet-16/1w-sunset.jpg";

export const meta: MetaFunction = () => {
  return [
    { title: "Porfolio | Miloud Photography" },
    {
      name: "Miloud Photography Portfolio",
      content:
        "Galleries of New York Weddings, Italian Weddings, and Celebration Events in Astoria NYC.",
    },
  ];
};

export default function Portfolio() {
  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 mx-5 gap-10 my-10">
      <PortfolioCard
        title="A NY Wedding"
        subTitle="WEDDINGS"
        link="ny-wedding"
        image={pier}
      />
      <PortfolioCard
        title="An Italian Wedding"
        subTitle="WEDDINGS"
        link="italian-wedding"
        image={sunset}
      />
      <PortfolioCard
        title="Sweet 16"
        subTitle="EVENTS"
        link="sweet-16"
        image={sunset16}
      />
    </div>
  );
}
