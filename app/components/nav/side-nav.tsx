import { Link } from "@remix-run/react";
import { classNames } from "~/utils/js.util";
import { navLinks, useNavContext } from "./nav-context";

export default function SideNav() {
  const { path, setPath, open, setOpen } = useNavContext();

  const handleNavClick = (name: string) => {
    setPath(name);
    setOpen(false);
  };

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
              <li
                className={classNames(
                  "py-1 text-2xl font-playfair base:font-semibold mx-7 transition-base hover:font-extrabold",
                  item.name === path
                    ? "text-accent font-extrabold underline underline-offset-4"
                    : " text-stone-800  hover:text-stone-500"
                )}
                onClick={() => handleNavClick(item.name)}
                aria-hidden="true"
              >
                {item.name.toUpperCase()}
              </li>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
