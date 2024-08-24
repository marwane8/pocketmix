import heroCouple from "~/assets/hill-couple.jpg";
import bagle from "~/assets/bagel.jpg";
import birdy from "~/assets/bird.jpg";
import mountain from "~/assets/mountain.jpg";

import GalleryItem from "./gallery-item";
import { GalleryContext } from "./gallery-context";
import { useState } from "react";
import ModalGallery from "./modal-gallery";
export default function Gallery() {
  const imageList = [bagle, birdy, mountain];

  const [isModalOpen, setModalOpen] = useState(false);
  const [images, setImageList] = useState<string[]>([]);

  return (
    <>
      <div className="grid gap-5 min-h-[1000px] grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-12 p-5 max-w-screen-xl m-auto">
        <GalleryContext.Provider
          value={{
            imageList: images,
            setImagesList: setImageList, 
            open: isModalOpen,
            setOpen: setModalOpen,
          }}
        >
          <section className="bg-accent row-span-8">s1</section>
          <section className="bg-accent row-span-4">s2</section>
          <section className="bg-accent row-span-6">s3</section>
          <section className="bg-accent row-span-8">s4</section>
          <section className="bg-accent row-span-6">s5</section>
          <GalleryItem
            className="bg-accent row-span-4"
            face={heroCouple}
            images={imageList}
            title="heros"
          />
          <ModalGallery initialIndex={0}/>
        </GalleryContext.Provider>
      </div>
    </>
  );
}
