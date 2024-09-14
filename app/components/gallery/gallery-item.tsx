import { useGalleryContext } from "./gallery-context";
import { classNames } from "~/utils/js.util";
import { motion, useInView } from "framer-motion"; // Import framer-motion
import { useRef } from "react";

type GalleryItemProps = {
  title?: string;
  images: string[]; // Add this prop to handle the gallery images
  className?: string;
  imageIndex: number;
};

export default function GalleryItem({
  title,
  images,
  imageIndex,
  className,
}: GalleryItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const { setOpen, setImagesList, setCurrentIndex } = useGalleryContext();
  const handleGalleryClick = () => {
    document.body.style.overflow = "hidden"; //Stop scrolling
    setImagesList(images);
    if (imageIndex != null) {
      setCurrentIndex(imageIndex);
    }
    setOpen(true);
  };

  return (
    <motion.div
      ref={ref}
      className={classNames("relative cursor-pointer", className)}
      onClick={() => handleGalleryClick()}
      aria-hidden
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: .75, delay: .15 }} // Adjust duration as needed
    >
      <img
        src={images[imageIndex]}
        alt={title}
        // className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100" />
    </motion.div>
  );
}
