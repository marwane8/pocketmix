import { useParams } from "@remix-run/react";
import PortfolioGallery from "~/components/portfolio-gallery";

export default function PortfolioEvent() {
  const { event } = useParams();
  return (
    <div className="my-10 max-w-screen-md m-auto">
      <h1 className="text-3xl text-center my-5 font-playfair_d">
        Grace&apos;s Wedding
      </h1>
      <p className="max-w-screen-sm m-auto mx-5 text-lg my-5">
        I had the joy of photographing a beautiful wedding in Brooklyn, and it
        was truly a memorable experience. The couple’s love radiated through
        every shot, and Brooklyn’s unique blend of urban charm and romance
        provided the perfect setting. This session felt like everything just
        fell into place, with each frame capturing the essence of the city and
        the couple’s connection.
      </p>
      <PortfolioGallery />
    </div>
  );
}
