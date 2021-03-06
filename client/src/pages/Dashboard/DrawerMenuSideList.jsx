import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Menu,
  MenuItem,
  Divider,
  Switch,
  Typography,
} from "@mui/material";
import LanguageSelect from "../../components/LanguageSelect";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import MyAccount from "./MyAccount";
import Publish from "./Publish";

import { signOut } from "firebase/auth";
import { auth } from "../../context/firebase-config";
import { Context } from "../../context/Context";

import { useNavigate } from "react-router-dom";

export default function DrawerMenuSideList({ setItemSelected }) {
  const { t } = useTranslation();
  const { isAuth, setIsAuth, checked, handleChangeDarkMode } =
    useContext(Context);
  let navigate = useNavigate();

  const [itemMenuSelected, setItemMenuSelected] = useState("Minha conta");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
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
            setItemMenuSelected(t("Dashboard.menuSideList.myAccount"));
          }}
        >
          <Typography variant="menu">
            {t("Dashboard.menuSideList.myAccount")}
          </Typography>
        </MenuItem>

        {isAuth && (
          <MenuItem
            onClick={() => {
              handleClose();
              setItemSelected(<Publish />);
              setItemMenuSelected("Publicar");
            }}
          >
            <Typography variant="menu">
              {t("Dashboard.menuSideList.publish")}
            </Typography>
          </MenuItem>
        )}

        <MenuItem>
          <LanguageSelect />
        </MenuItem>

        <MenuItem>
          {checked ? (
            <DarkModeIcon color="primary" />
          ) : (
            <LightModeIcon color="primary" />
          )}
          <Switch onChange={handleChangeDarkMode} />
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            signUserOut();
          }}
        >
          <Typography variant="menu">
            {t("Dashboard.menuSideList.logOut")}
          </Typography>
        </MenuItem>
      </Menu>
      <Divider />
    </div>
  );
}
