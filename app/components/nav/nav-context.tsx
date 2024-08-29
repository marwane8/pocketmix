import { createContext, useContext } from "react";

type NavContextType = {
  path: string;
  setPath: (path: string) => void;
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};
export const NavContext = createContext<NavContextType | null>(null);

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
}

export const navLinks = [
  { name: "services"},
  { name: "about" }
];