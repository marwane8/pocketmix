import PortfolioGallery from "~/components/portfolio-gallery";

import sunset from "~/assets/italian-wedding/1w-sunset.jpg";
import herp from "~/assets/italian-wedding/2-herp.jpg";
import hisp from "~/assets/italian-wedding/3-hisp.jpg";
import view from "~/assets/italian-wedding/4w-view.jpg";
import bed from "~/assets/italian-wedding/5w-bed.jpg";
import maids from "~/assets/italian-wedding/6-maids.jpg";
import grooms from "~/assets/italian-wedding/7w-grooms.jpg";
import jewels from "~/assets/italian-wedding/9w-jewels.jpg";
import shoes from "~/assets/italian-wedding/8w-shoes.jpg";

export default function ItalianWeddingGallery() {
  const photos = [
    { image: sunset, wide: true },
    { image: herp, wide: false },
    { image: hisp, wide: false },
    { image: view, wide: true },
    { image: bed, wide: true },
    { image: jewels, wide: false },
    { image: shoes, wide: false },
    { image: maids, wide: true },
    { image: grooms, wide: true }
  ];

  return (
    <div className="my-10 max-w-screen-md m-auto">
      <h1 className="text-3xl text-center my-5 font-playfair_d">
        An Italian Wedding
      </h1>
      <p className="max-w-screen-sm m-auto mx-5 text-lg my-5">
        I had the pleasure of photographing a stunning wedding for an Italian
        couple, and it was truly an unforgettable experience. Their love shone
        through in every shot, and the blend of Italian elegance and romance
        created the perfect backdrop. This session felt like everything aligned
        perfectly, with each frame capturing the essence of their deep
        connection and the timeless beauty of their celebration.
      </p>
      <PortfolioGallery imageList={photos} />
    </div>
  );
}
