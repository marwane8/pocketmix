import PortfolioGallery from "~/components/portfolio-gallery";

import pier from "~/assets/ny-wedding/0w-pier.jpg";
import look from "~/assets/ny-wedding/1-look.jpg";
import hold from "~/assets/ny-wedding/2-hold.jpg";
import wzbo from "~/assets/ny-wedding/3w-zbo.jpg";
import shoes from "~/assets/ny-wedding/4w-shoes.jpg";
import cake from "~/assets/ny-wedding/5-cake.jpg";
import wall from "~/assets/ny-wedding/6-wall.jpg";
import point from "~/assets/ny-wedding/7w-point.jpg";
import flower from "~/assets/ny-wedding/8w-flower.jpg";
import sit from "~/assets/ny-wedding/9w-sit.jpg";

export default function NYWeddingGallery() {
  const photos = [
    { image: pier, wide: true },
    { image: look, wide: false },
    { image: hold, wide: false },
    { image: wzbo, wide: true },
    { image: shoes, wide: true },
    { image: cake, wide: false },
    { image: wall, wide: false },
    { image: point, wide: true},
    { image: flower, wide: false },
    { image: sit, wide: false },
  ];

  return (
    <div className="my-10 max-w-screen-md m-auto">
      <h1 className="text-3xl text-center my-5 font-playfair_d">
        A NY Wedding
      </h1>
      <p className="max-w-screen-sm m-auto mx-5 text-lg my-5">
        I had the joy of photographing a beautiful wedding in Brooklyn, and it
        was truly a memorable experience. The couple’s love radiated through
        every shot, and Brooklyn’s unique blend of urban charm and romance
        provided the perfect setting. This session felt like everything just
        fell into place, with each frame capturing the essence of the city and
        the couple’s connection.
      </p>
      <PortfolioGallery imageList={photos} />
    </div>
  );
}
