import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";

import LogoLight from "../../assets/img/logo/Logo24-primary-30.svg";
import LogoDark from "../../assets/img/logo/Logo24-primary-80.svg";

import InfoIcon from "@mui/icons-material/Info";
import FeedIcon from "@mui/icons-material/Feed";
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

import { NavLink } from "react-router-dom";

const DrawerComponent = (props) => {
  const sideList = () => (
    <Box
      sx={{ width: { xs: "14rem", md: "15rem" }, p: { xs: "1rem" } }}
      onClick={props.toggleDrawerHandler}
    >
      <Box sx={{ p: "1rem" }}>
        <NavLink to="/">
          <img src={props.checked ? LogoDark : LogoLight} alt="Logo" />
        </NavLink>
      </Box>

      <Divider />

      <List>
        <NavLink to="/sobre">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
        </NavLink>
        <NavLink to="#">
          <ListItem button>
            <ListItemIcon>
              <FeedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </NavLink>
        <NavLink to="/busca">
          <ListItem button>
            <ListItemIcon>
              <SearchIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Busca" />
          </ListItem>
        </NavLink>
        <NavLink to="/contato">
          <ListItem button>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItem>
        </NavLink>
        <NavLink to="/login">
          <ListItem button>
            <ListItemIcon>
              <PersonIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </NavLink>
        {props.isAuth && (
          <NavLink to="/publicar">
            <ListItem button>
              <ListItemIcon>
                <RocketLaunchIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Publicar" />
            </ListItem>
          </NavLink>
        )}
      </List>

      <Box sx={{ position: "fixed", bottom: 0, pl: "0.5rem" }}>
        <NavLink to="/styleguide">
          <ListItem button disableGutters>
            <ListItemIcon>
              <HistoryEduIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Termos de uso" />
          </ListItem>
        </NavLink>
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
