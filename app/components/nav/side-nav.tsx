import { Link } from "@remix-run/react";
import Modal from "../modal";
import { captialCase, classNames } from "~/utils/js.util";
import { navLinks, sideLinks, useNavContext } from "./nav-context";

export default function SideNav() {
  const { path, setPath, open, setOpen } = useNavContext();

  return (
    <Modal
      isVisible={open}
      onClose={() => setOpen(false)}
    >
      <div className="fixed inset-y-0 left-0 z-20 bg-gray-900">
        <Link
          className="m-auto"
          to={"/"}
          onClick={() => {
            setPath("");
            setOpen(false);
          }}
        >
          <div className="w-full px-3 py-3 text-center text-lg  font-bold italic text-gray-50">
            MuslimLeagueCT
          </div>
        </Link>

        <div className="w-56 text-base">
          <ul className="p-2">
            {navLinks.map((item, i) => (
              <li
                key={i}
                className="py-1 text-center"
              >
                <Link
                  to={`/${item.name}`}
                  className={classNames(
                    item.name === path
                      ? "bg-gray-800 fill-white text-white"
                      : "fill-gray-400 text-gray-400 hover:bg-gray-800 hover:fill-white hover:text-white",
                    "group flex gap-x-3 rounded-md p-2 font-semibold leading-6",
                  )}
                  onClick={() => {
                    setPath(item.name);
                    setOpen(false);
                  }}
                >
                  <span>{captialCase(item.name)}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mx-3 my-2 border-b" />

          <ul className="p-2">
            {sideLinks.map((item, i) => (
              <li
                key={i}
                className="py-1 text-center"
              >
                <Link
                  to={`/${item.name}`}
                  className={classNames(
                    item.name === path
                      ? "bg-gray-800 fill-white text-white"
                      : "fill-gray-400 text-gray-400 hover:bg-gray-800 hover:fill-white hover:text-white",
                    "group flex gap-x-3 rounded-md p-2 font-semibold leading-6",
                  )}
                  onClick={() => {
                    setPath(item.name);
                    setOpen(false);
                  }}
                >
                  {item.icon && (
                    <item.icon
                      className="h-6 w-6 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span>{captialCase(item.name)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
