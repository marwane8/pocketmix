import bride1 from "~/assets/bride1.jpg";
import bride3 from "~/assets/bride3.jpg";
import bride4 from "~/assets/bride4.jpg";
import shoe1 from "~/assets/shoe1.jpg";
import shoe2 from "~/assets/shoe2.jpg";
import ring from "~/assets/ring.jpg";

import GalleryItem from "./gallery/gallery-item";
import GalleryModal from "./gallery/gallery-modal";
import { GalleryContext } from "./gallery/gallery-context";
import { useState } from "react";

export default function PortfolioGallery() {
  const imageList = [bride1, bride3, bride4, shoe1, shoe2, ring];

  const [isModalOpen, setModalOpen] = useState(false);
  const [images, setImageList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <div className="grid grid-cols-2 gap-5 md:p-5">
      <GalleryContext.Provider
        value={{
          imageList: images,
          setImagesList: setImageList,
          open: isModalOpen,
          setOpen: setModalOpen,
          currentIndex,
          setCurrentIndex,
        }}
      >
        <GalleryItem
          className="col-span-2"
          face={ring}
          images={imageList}
          imageIndex={0}
        />
        <GalleryItem
          face={bride1}
          images={imageList}
          imageIndex={5}
        />

        <GalleryItem
          className=""
          face={bride3}
          images={imageList}
          imageIndex={4}
        />

        <GalleryItem
          className="col-span-2"
          face={shoe2}
          images={imageList}
          imageIndex={1}
        />

        <GalleryModal />
      </GalleryContext.Provider>
    </div>
  );
}
