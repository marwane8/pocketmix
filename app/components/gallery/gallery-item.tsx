import { useInView } from "react-intersection-observer";
import { useGalleryContext } from "./gallery-context";

type GalleryItemProps = {
  face: string;
  title: string;
  images: string[]; // Add this prop to handle the gallery images
  className?: string;
};

export default function GalleryItem({
  face,
  title,
  images,
  className,
}: GalleryItemProps) {
  const { setOpen, setImagesList } = useGalleryContext();

  const handleGalleryClick = () => {
    document.body.style.overflow = "hidden"; //Stop scrolling
    setImagesList(images);
    setOpen(true);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this to control when the animation starts
  });

  return (
    <div
      ref={ref}
      className={`my-8 sm:my-0 max-h-[700px]  sm:max-h-[1000px] relative cursor-pointer overflow-hidden transition-opacity duration-500 ease-in-out
        ${className} ${inView ? "opacity-100" : "opacity-0"}`}
      onClick={() => handleGalleryClick()}
      aria-hidden
    >
      <img
        src={face}
        alt={title}
        // className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
        <h3 className="text-white text-xl font-bold tracking-wider">
          {title.toUpperCase()}
        </h3>
      </div>
    </div>
  );
}
