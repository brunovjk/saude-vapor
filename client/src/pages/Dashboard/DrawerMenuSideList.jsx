import React, { useState } from "react";
import { Button, Menu, MenuItem, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import MyAccount from "./MyAccount";
import Publish from "./Publish";

export default function DrawerMenuSideList({ setItemSelected, isAuth }) {
  const [itemMenuSelected, setItemMenuSelected] = useState("Minha conta");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="text"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ my: "8px" }}
      >
        {itemMenuSelected}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            setItemSelected(<MyAccount isAuth={isAuth} />);
            setItemMenuSelected("Minha conta");
          }}
        >
          Minha conta
        </MenuItem>
        {isAuth && (
          <MenuItem
            onClick={() => {
              handleClose();
              setItemSelected(<Publish />);
              setItemMenuSelected("Publicar");
            }}
          >
            Publicar
          </MenuItem>
        )}
        <MenuItem
          onClick={() => {
            handleClose();
          }}
        >
          Sair
        </MenuItem>
      </Menu>
      <Divider />
    </div>
  );
}
