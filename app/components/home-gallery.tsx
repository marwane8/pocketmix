import bride1 from "~/assets/home-gallery/bride1.jpg"
import family2 from "~/assets/home-gallery/family2.jpg"
import bride3 from "~/assets/home-gallery/bride3.jpg"
import decor1 from "~/assets/home-gallery/decor1.jpg"
import child2 from "~/assets/home-gallery/child2.jpg"
import couple3 from "~/assets/home-gallery/couple3.jpg"

import GalleryItem from "./gallery/gallery-item";
import GalleryModal from "./gallery/gallery-modal";
import { GalleryContext } from "./gallery/gallery-context";
import { useState } from "react";

export default function HomeGallery() {
  const imageList = [bride1, family2, bride3, child2, decor1, couple3];

  const [isModalOpen, setModalOpen] = useState(false);
  const [images, setImageList] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  return (
    <>
      <div className="grid gap-8 m-8 grid-rows-3 sm:grid-cols-2  lg:grid-cols-3   max-w-screen-2xl 2xl:mx-auto max-h-[3000px] lg:max-h-[1000px]">
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
            images={imageList}
            imageIndex={0}
            className="sm:row-span-2"
          />

          <GalleryItem
            images={imageList}
            imageIndex={1}
          />

          <GalleryItem
            images={imageList}
            imageIndex={2}
            className="sm:row-span-2"
          />

          <GalleryItem
            images={imageList}
            imageIndex={3}
            className="sm:row-span-2"
          />

          <GalleryItem
            images={imageList}
            imageIndex={4}
          />

          <GalleryItem
            images={imageList}
            imageIndex={5}
          />
          <GalleryModal />
        </GalleryContext.Provider>
      </div>
    </>
  );
}
