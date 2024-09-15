import GalleryItem from "./gallery/gallery-item";
import GalleryModal from "./gallery/gallery-modal";
import { GalleryContext } from "./gallery/gallery-context";
import { useState } from "react";

type PortfolioGalleryProps = {
  imageList: { image: string; wide: boolean }[];
};

export default function PortfolioGallery({ imageList }: PortfolioGalleryProps) {
  const Images = imageList.map((image) => image.image);
  const [isModalOpen, setModalOpen] = useState(false);
  const [images, setImageList] = useState<string[]>(Images);
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
        {imageList.map((image, index) => (
          <GalleryItem
            key={index}
            className={image.wide ? "col-span-2" : ""}
            images={Images}
            imageIndex={index}
          />
        ))}
        <GalleryModal />
      </GalleryContext.Provider>
    </div>
  );
}
