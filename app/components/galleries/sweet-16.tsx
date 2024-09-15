import PortfolioGallery from "~/components/portfolio-gallery";

import sunset from "~/assets/sweet-16/1w-sunset.jpg";
import her from "~/assets/sweet-16/2w-her.jpg";
import look from "~/assets/sweet-16/3-look.jpg";
import family from "~/assets/sweet-16/4w-family.jpg";
import singer from "~/assets/sweet-16/5-singer.jpg";
import player from "~/assets/sweet-16/6-player.jpg";
import shoes from "~/assets/sweet-16/7w-shoes.jpg";
import bottels from "~/assets/sweet-16/8w-bottels.jpg";

export default function Sweet16Gallery() {
  const photos = [
    { image: sunset, wide: true },
    { image: her, wide: false },
    { image: look, wide: false },
    { image: family, wide: true },
    { image: shoes, wide: true },
    { image: singer, wide: false },
    { image: player, wide: false },
    { image: bottels, wide: true },
  ];

  return (
    <div className="my-10 max-w-screen-md m-auto">
      <h1 className="text-3xl text-center my-5 font-playfair_d">
        Sweet Sixteen
      </h1>
      <p className="max-w-screen-sm m-auto mx-5 text-lg my-5">
        I had the absolute pleasure of photographing a stunning Sweet 16
        celebration, and it was truly a magical experience. The birthday girl’s
        radiant beauty, dressed in a gorgeous red gown, stole the spotlight in
        every shot. The vibrant red of her dress perfectly complemented the joy
        and excitement of the day, creating a sense of elegance and celebration.
        Every frame captured the essence of her youthful spirit and the special
        bond she shared with her family and friends on this unforgettable day.
      </p>
      <PortfolioGallery imageList={photos} />
    </div>
  );
}
