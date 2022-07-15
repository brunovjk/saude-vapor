import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import LanguageSelect from "../../components/LanguageSelect";

import PersonIcon from "@mui/icons-material/Person";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";

import MyAccount from "./MyAccount";
import Publish from "./Publish";

import { signOut } from "firebase/auth";
import { auth } from "../../context/firebase-config";
import { Context } from "../../context/Context";

import { useNavigate } from "react-router-dom";

export default function MenuSideList({ setItemSelected }) {
  const { t } = useTranslation();
  const { isAuth, setIsAuth, checked, handleChangeDarkMode } =
    useContext(Context);
  let navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/");
    });
  };

  return (
    <List sx={{ height: "100%", my: "16px" }}>
      <Box sx={{ height: "100%" }}>
        <Box sx={{ height: "90%" }}>
          <ListItem
            button
            disableGutters
            onClick={() => {
              setItemSelected(<MyAccount />);
            }}
          >
            <ListItemIcon>
              <PersonIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={t("Dashboard.menuSideList.myAccount")} />
          </ListItem>

          {isAuth && (
            <ListItem
              button
              disableGutters
              onClick={() => {
                setItemSelected(<Publish />);
              }}
            >
              <ListItemIcon>
                <DriveFileRenameOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={t("Dashboard.menuSideList.publish")} />
            </ListItem>
          )}

          <ListItem button disableGutters>
            <ListItemIcon>
              <LanguageIcon color="primary" />
            </ListItemIcon>
            <ListItemText>
              <LanguageSelect />
            </ListItemText>
          </ListItem>

          <ListItem button disableGutters>
            <ListItemIcon>
              {checked ? (
                <DarkModeIcon color="primary" />
              ) : (
                <LightModeIcon color="primary" />
              )}
            </ListItemIcon>
            <ListItemText>
              <Switch onChange={handleChangeDarkMode} />
            </ListItemText>
          </ListItem>
        </Box>

        <Box>
          <ListItem button disableGutters onClick={signUserOut}>
            <ListItemIcon>
              <ExitToAppIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={t("Dashboard.menuSideList.logOut")} />
          </ListItem>
        </Box>
      </Box>
    </List>
  );
}
