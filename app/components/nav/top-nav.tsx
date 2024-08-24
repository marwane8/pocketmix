import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

import { classNames } from "~/utils/js.util";

import { navLinks, useNavContext } from "./nav-context";

export default function TopNav() {
  const { path, setPath, open, setOpen } = useNavContext();

  const handleNavClick = (name: string) => {
    setPath(name);
    setOpen(false);
  };

  return (
    <nav className="flex items-center">
      <div className="w-full flex justify-between">
        <label className="swap swap-rotate md:hidden w-9 ml-3">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            checked={open}
            onChange={() => setOpen(!open)}
          />
          <Bars3Icon className="swap-off w-full" />
          <XMarkIcon className="swap-on w-full" />
        </label>

        <Link to={"/"} className="px-5 w-full">
          <div
            className="text-4xl  py-3  text-center md:text-left font-gwendy  text-primary font-extrabold"
            onClick={() => handleNavClick("")}
            aria-hidden
          >
            Light Click Photo
          </div>
        </Link>

        <ul className="md:flex items-center w-fit hidden">
          {navLinks.map((item, index) => (
            <Link key={index} to={`/${item.name}`} prefetch="viewport">
              <li
                className={classNames(
                  "py-1 text-xl font-playfair font-semibold mx-5 min-w-24 text-center transition-base hover:font-extrabold",
                  item.name === path
                    ? "text-accent font-extrabold underline underline-offset-4"
                    : " hover:text-stone-500"
                )}
                onClick={() => handleNavClick(item.name)}
                aria-hidden="true"
              >
                {item.name.toUpperCase()}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
