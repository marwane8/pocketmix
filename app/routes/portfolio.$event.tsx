import { MetaFunction, useParams } from "@remix-run/react";
import ItalianWeddingGallery from "~/components/galleries/italian-wedding";
import NYWeddingGallery from "~/components/galleries/ny-wedding";
import Sweet16Gallery from "~/components/galleries/sweet-16";


export const meta: MetaFunction = () => {
  return [
    { title: "Gallery | Miloud Photography" },
    {
      name: "Miloud Photography Gallery Page",
      content:
        "Gallery of Photos from events taken by Miloud Photography. Professional Event Photography in Astoria, New York."
    },
  ];
}



export default function PortfolioEvent() {
  const params = useParams();
  const { event } = params;

  return (
    <>
      {event == "ny-wedding" && <NYWeddingGallery />}
      {event == "italian-wedding" && <ItalianWeddingGallery />}
      {event == "sweet-16" && <Sweet16Gallery />}
    </>
  );
}
