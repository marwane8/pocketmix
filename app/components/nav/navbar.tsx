import { useEffect, useState } from "react";

import TopNav from "./top-nav";
import SideNav from "./side-nav";
import { NavContext } from "./nav-context";

export default function Navbar({ path }: { path: string }) {
  const [open, setOpen] = useState<boolean>(false);
  const [currPath, setPath] = useState(path);

  useEffect(() => {
    setPath(path);
  }, [path]);

  return (
    <div>
      <NavContext.Provider value={{ path: currPath, setPath, open, setOpen }}>
        <TopNav />
        <SideNav />
      </NavContext.Provider>
    </div>
  );
}
