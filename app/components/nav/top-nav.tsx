import { Bars3Icon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";

import Container from "~/components/container";
import { classNames } from "~/utils/js.util";

import { navLinks, useNavContext } from "./nav-context";

export default function TopNav() {
  const { path, setPath, setOpen } = useNavContext();

  const handleNavClick = (name: string) => {
    setPath(name);
    setOpen(false);
  };

  return (
    <nav className="flex items-center">
      <Container className="px-5">
        <div className=" flex justify-between">
          <div className="flex w-fit md:hidden">
            <button
              className="rounded-sm focus:bg-neutral-50 focus:bg-opacity-20 focus:ring-2"
              onClick={() => {
                setOpen(true);
              }}
            >
              <Bars3Icon className="w-7" />
            </button>
          </div>
          <Link to={"/"} className="w-full">
            <div
              className="text-4xl md:text-5xl  py-3  text-center md:text-left font-gwendy  text-primary font-extrabold"
              onClick={() => setPath("")}
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
                    "py-1 text-xl font-playfair font-semibold mx-7",
                    item.name === path
                      ? "text-accent font-extrabold underline underline-offset-4"
                      : " text-stone-800  hover:text-stone-500 hover:transition-colors hover:duration-150 duration-150"
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
      </Container>
    </nav>
  );
}
