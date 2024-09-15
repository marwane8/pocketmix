import { useParams } from "@remix-run/react";
import ItalianWeddingGallery from "~/components/galleries/italian-wedding";
import NYWeddingGallery from "~/components/galleries/ny-wedding";
import Sweet16Gallery from "~/components/galleries/sweet-16";

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
