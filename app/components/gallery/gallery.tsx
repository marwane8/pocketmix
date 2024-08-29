import bride1 from "~/assets/bride1.jpg";
import bride3 from "~/assets/bride3.jpg";
import bride4 from "~/assets/bride4.jpg";
import shoe1 from "~/assets/shoe1.jpg";
import shoe2 from "~/assets/shoe2.jpg";
import ring from "~/assets/ring.jpg";

import GalleryItem from "./gallery-item";
import GalleryModal from "./gallery-modal";
import { GalleryContext } from "./gallery-context";
import { useState } from "react";

export default function Gallery() {
  const imageList = [bride1, bride3, bride4, shoe1, shoe2, ring];

  const [isModalOpen, setModalOpen] = useState(false);
  const [images, setImageList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <>
      <div className="sm:grid gap-8 m-8  grid-rows-8 sm:grid-cols-2  lg:grid-cols-3   max-w-screen-2xl 2xl:mx-auto">
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
            className="bg-accent row-span-8"
            face={bride1}
            images={imageList}
            imageIndex={0}
          />
          <GalleryItem
            className="bg-accent row-span-3"
            face={ring}
            images={imageList}
            imageIndex={5}
          />

          <GalleryItem
            className="bg-accent row-span-3"
            face={shoe2}
            images={imageList}
            imageIndex={4}
          />

          <GalleryItem
            className="bg-accent row-span-8"
            face={bride3}
            images={imageList}
            imageIndex={1}
          />

          <GalleryItem
            className="bg-accent row-span-8"
            face={bride4}
            images={imageList}
            imageIndex={2}
          />

          <GalleryItem
            className="bg-accent row-span-2"
            face={shoe1}
            images={imageList}
            imageIndex={3}
          />
          <GalleryModal />
        </GalleryContext.Provider>
      </div>
    </>
  );
}
