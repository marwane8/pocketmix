import { Link } from "@remix-run/react";
import { classNames } from "~/utils/js.util";
import { navLinks, useNavContext } from "./nav-context";
import { useEffect } from "react";

export default function SideNav() {
  const { path, setPath, open, setOpen } = useNavContext();

  const handleNavClick = (name: string) => {
    setPath(name);
    setOpen(false);
  };

  // Prevent body scroll when the side navigation is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <div
      className={classNames(
        "w-full z-20 bg-neutral h-screen-svh md:hidden",
        open ? "fixed" : "hidden"
      )}
    >
      <ul className="p-2 h-80 flex flex-col justify-center animate-drop">
        {navLinks.map((item, i) => (
          <li key={i} className="py-1 text-center my-3">
            <Link key={i} to={`/${item.name}`} prefetch="viewport">
              <div
                className={classNames(
                  "py-1 text-2xl font-playfair mx-7 transition-base hover:font-extrabold",
                  item.name === path
                    ? "text-secondary font-extrabold underline underline-offset-4"
                    : " text-stone-800  hover:text-stone-600 font-semibold"
                )}
                onClick={() => handleNavClick(item.name)}
                aria-hidden="true"
              >
                {item.name.toUpperCase()}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
