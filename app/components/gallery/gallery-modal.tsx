import Modal from "../modal";
import { useGalleryContext } from "./gallery-context";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

export default function ModalGallery() {
  const { open, setOpen, imageList, currentIndex, setCurrentIndex } =
    useGalleryContext();

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % imageList.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    setCurrentIndex(prevIndex);
  };

  const closeModalGallery = () => {
    document.body.style.overflow = ""; //Enable scrolling
    setOpen(false);
  };

  const slideVariant = {
    visible: { opacity: [0, 0, 0, 1] },
    hidden: { opacity: [1, 0, 0, 0] },
  };

  return (
    <Modal
      isVisible={open}
      onClose={closeModalGallery}
      className="z-40 flex flex-col"
    >
      <button onClick={closeModalGallery}>
        <XMarkIcon className="fixed top-0 right-0 text-neutral w-10  m-5" />
      </button>

      <div className=" relative h-4/5 w-screen">
        <button
          className="absolute  h-full w-1/2 z-10"
          onClick={handlePrevious}
        >
          <ChevronLeftIcon className="hidden md:block text-stone-200 p-2 bg-gray-100 w-14 bg-opacity-40 hover:bg-opacity-60 transition duration-150 ease-in rounded-full mx-3" />
        </button>
        <button
          className="absolute  h-full w-1/2 translate-x-[100%] z-10 flex justify-end items-center"
          onClick={handleNext}
        >
          <ChevronRightIcon className="hidden md:block text-stone-200 p-2 bg-gray-100 w-14 bg-opacity-40 hover:bg-opacity-60 transition duration-150 ease-in rounded-full mx-3" />
        </button>

        <AnimatePresence>
          <motion.img
            variants={slideVariant}
            key={imageList[currentIndex]}
            src={imageList[currentIndex]}
            alt={`${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1
            }}
            className="h-full absolute object-contain w-full  transition-all duration-100"
          />
        </AnimatePresence>
      </div>
    </Modal>
  );
}
