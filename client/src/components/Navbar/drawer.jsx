import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { useTranslation } from "react-i18next";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
} from "@mui/material";
import LanguageSelect from "../LanguageSelect";

import LogoLight from "../../assets/img/logo/Logo24-primary-30.svg";
import LogoDark from "../../assets/img/logo/Logo24-primary-80.svg";

import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import GridViewIcon from "@mui/icons-material/GridView";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import LanguageIcon from "@mui/icons-material/Language";

import { Link } from "react-router-dom";

const DrawerComponent = (props) => {
  const { checked, handleChangeDarkMode } = useContext(Context);
  const { t } = useTranslation();

  const sideList = () => (
    <Box>
      <Box sx={{ width: { xs: "14rem", md: "15rem" }, p: { xs: "2rem" } }}>
        <Link to="/">
          <img src={props.checked ? LogoDark : LogoLight} alt="Logo" />
        </Link>
      </Box>

      <Divider />

      <List>
        <Link to="/sobre">
          <ListItem button onClick={props.toggleDrawerHandler}>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.drawer.menu.about")} />
          </ListItem>
        </Link>
        <Link to="/busca">
          <ListItem button onClick={props.toggleDrawerHandler}>
            <ListItemIcon>
              <SearchIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.drawer.menu.search")} />
          </ListItem>
        </Link>
        <Link to="/contato">
          <ListItem button onClick={props.toggleDrawerHandler}>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.drawer.menu.contact")} />
          </ListItem>
        </Link>
        {!props.isAuth ? (
          <Link to="/login">
            <ListItem button onClick={props.toggleDrawerHandler}>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={t("Navbar.drawer.menu.login")} />
            </ListItem>
          </Link>
        ) : (
          <Link to="/minhaconta">
            <ListItem button onClick={props.toggleDrawerHandler}>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={t("Navbar.drawer.menu.myAccount")} />
            </ListItem>
          </Link>
        )}
        <Link to="/blockchain">
          <ListItem button onClick={props.toggleDrawerHandler}>
            <ListItemIcon>
              <GridViewIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.drawer.menu.blockchain")} />
          </ListItem>
        </Link>

        <ListItem button>
          <ListItemIcon>
            <LanguageIcon color="primary" />
          </ListItemIcon>
          <ListItemText>
            <LanguageSelect onClickProps={props.toggleDrawerHandler} />
          </ListItemText>
        </ListItem>

        <ListItem button onClick={props.toggleDrawerHandler}>
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
      </List>

      <Box sx={{ position: "fixed", bottom: 0, pl: "0.5rem" }}>
        <Link to="/termos">
          <ListItem button disableGutters onClick={props.toggleDrawerHandler}>
            <ListItemIcon>
              <HistoryEduIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={t("Navbar.drawer.menu.terms")} />
          </ListItem>
        </Link>
      </Box>
    </Box>
  );

  return (
    <Drawer open={props.open} onClose={props.toggleDrawerHandler}>
      {sideList()}
    </Drawer>
  );
};

export default DrawerComponent;
