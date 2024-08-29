import { useState } from "react";
import Modal from "../modal";
import { useGalleryContext } from "./gallery-context";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type GalleryModalProps = {
  initialIndex: number;
};

export default function ModalGallery({ initialIndex }: GalleryModalProps) {
  const { open, setOpen, imageList } = useGalleryContext();

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length
    );
  };

  return (
    <Modal isVisible={open} onClose={() => setOpen(false)} className="p-4 z-40">
      <div className="w-full flex max-w-7xl  items-center">
        <button onClick={handlePrevious} className="text-stone-500 transition-base hover:text-stone-200 hover:-translate-y-0.5">
          <ChevronLeftIcon className="mr-3 w-8 sm:w-20" />
        </button>

        <div className=" bg-white p-3 sm:p-6 rounded-lg shadow-lg max-h-screen">
          <img
            src={imageList[currentIndex]}
            alt={`${currentIndex + 1}`}
            className="h-screen object-contain rounded-lg"
          />
        </div>

        <button onClick={handleNext} className="text-stone-500 transition-base hover:text-stone-200 hover:-translate-y-0.5">
          <ChevronRightIcon className="w-8 ml-3 sm:w-20" />
        </button>
      </div>
    </Modal>
  );
}
