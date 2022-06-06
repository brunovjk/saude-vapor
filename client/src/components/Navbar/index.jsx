import React, { useState } from "react";

import DrawerComponent from "./drawer";
import ToolbarComponent from "./toolbar";

const Navbar = ({ isAuth, setIsAuth, checked }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(false);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      <ToolbarComponent
        openDrawerHandler={openDrawer}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        checked={checked}
      />
      <DrawerComponent
        open={isDrawerOpen}
        toggleDrawerHandler={toggleDrawer}
        isAuth={isAuth}
        checked={checked}
      />
    </>
  );
};

export default Navbar;
