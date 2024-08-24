import { useState } from "react";
import Modal from "../modal";
import { useGalleryContext } from "./gallery-context";

type ModalGalleryProps = {
  initialIndex: number;
};

export default function ModalGallery({
  initialIndex,
}: ModalGalleryProps) {
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
    <Modal isVisible={open} onClose={() => setOpen(false)} className="p-4">
      <div className="relative max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 btn btn-sm btn-circle"
        >
          ✕
        </button>
        <img
          src={imageList[currentIndex]}
          alt={`${currentIndex + 1}`}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="flex justify-between mt-4">
          <button onClick={handlePrevious} className="btn">
            Previous
          </button>
          <button onClick={handleNext} className="btn">
            Next
          </button>
        </div>
      </div>
    </Modal>
  );
}
