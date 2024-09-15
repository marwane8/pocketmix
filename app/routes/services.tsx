import { MetaFunction } from "@remix-run/react";
import ring from "~/assets/stock/ring.jpg";
import ServiceCard from "~/components/service-card";

export const meta: MetaFunction = () => {
  return [
    { title: "Services | Miloud Photography" },
    {
      name: "Miloud Photography Services",
      content:
        "Pricing pages of Wedding Services, Passport Photgraphy Services, Event Services, and Studio Photography Services in Astoria, New York"
    },
  ];
}

export default function Services() {
  return (
    <div>
      <img
        src={ring}
        alt="3 rings next to each other"
        className=" object-cover w-full h-60 md:h-96 object-center"
      />
      <h1 className="text-2xl md:text-3xl text-center font-semibold py-5 font-playfair_d">
        NYC PHOTOGRAPHY SERVICES
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-7 max-w-screen-lg lg:mx-auto">
        <ServiceCard
          title="Weddings"
          price={1100}
          featureList={[
            "1-hour Portait Session",
            "Solo, Couples, Family Photos",
            "High-resolution edited Digital Portaits",
          ]}
        />
        <ServiceCard
          title="Parties"
          price={2000}
          featureList={[
            "1-hour Portait Session",
            "Solo, Couples, Family Photos",
            "High-resolution edited Digital Portaits",
          ]}
        />
        <ServiceCard
          title="Parties"
          price={2000}
          featureList={[
            "1-hour Portait Session",
            "Solo, Couples, Family Photos",
            "High-resolution edited Digital Portaits",
          ]}
        />
      </div>
    </div>
  );
}
