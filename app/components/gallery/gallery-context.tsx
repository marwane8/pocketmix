import { createContext, useContext } from "react";

type GalleryContextType = {
  imageList: string[];
  setImagesList: (images: string[]) => void;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

export const GalleryContext = createContext<GalleryContextType | null>(null);

export function useGalleryContext() {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error(
      "useGalleryContext must be used within a NavContextProvider"
    );
  }
  return context;
}
