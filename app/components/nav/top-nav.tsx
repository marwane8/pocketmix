import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

import logo from "~/assets/company/logo.png";
import { classNames } from "~/utils/js.util";

import { navLinks, useNavContext } from "./nav-context";
import { useEffect, useState } from "react";

export default function TopNav() {
  const { path, setPath, open, setOpen } = useNavContext();
  const [scroll, setScroll] = useState(false);

  const handleNavClick = (name: string) => {
    document.body.style.overflow = ""; //Stop scrolling
    setOpen(false);
    setPath(name);
  };

  const toggleSideMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed flex items-center h-20 px-5 w-full  bg-neutral transition-all duration-300 z-30  ${
        scroll && "bg-opacity-70 "
      }`}
    >
      <div className="w-full flex justify-between">
        <label className="swap swap-rotate md:hidden w-9">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" checked={open} onChange={toggleSideMenu} />
          <Bars3Icon className="swap-off w-full" />
          <XMarkIcon className="swap-on w-full" />
        </label>

        <Link to={"/"} className="w-full">
          <img
            className=" w-40 md:w-44 m-auto md:m-0"
            src={logo}
            alt="Miloud Photography Logo"
            onClick={() => handleNavClick("")}
            aria-hidden
          />
        </Link>

        <ul className="md:flex items-center w-fit hidden">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.link ? `${item.link}` : `/${item.name}`}
              prefetch="viewport"
            >
              <li
                className={classNames(
                  "py-1 text-xl font-playfair mx-2 min-w-24 text-center transition-base hover:font-extrabold",
                  item.name === path
                    ? "text-secondary font-extrabold underline underline-offset-4"
                    : " hover:text-stone-600 font-semibold"
                )}
                onClick={async () => await handleNavClick(item.name)}
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
