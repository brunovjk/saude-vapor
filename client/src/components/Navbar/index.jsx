import React, { useState, useContext } from "react";

import DrawerComponent from "./drawer";
import ToolbarComponent from "./toolbar";

import { Context } from "../../context/Context";

const Navbar = () => {
  const { isAuth, checked } = useContext(Context);

  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(false);
  };

  const openDrawer = () => {
    setDrawerOpen(true);
  };

  return (
    <>
      <ToolbarComponent openDrawerHandler={openDrawer} />
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
