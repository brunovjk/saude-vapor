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
import EmailIcon from "@mui/icons-material/Email";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import GridViewIcon from "@mui/icons-material/GridView";

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
        {!props.isAuth ? (
          <NavLink to="/login">
            <ListItem button>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </NavLink>
        ) : (
          <NavLink to="/minhaconta">
            <ListItem button>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Minha conta" />
            </ListItem>
          </NavLink>
        )}
        <NavLink to="/blockchain">
          <ListItem button>
            <ListItemIcon>
              <GridViewIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Blockchain" />
          </ListItem>
        </NavLink>
      </List>

      <Box sx={{ position: "fixed", bottom: 0, pl: "0.5rem" }}>
        <NavLink to="/termos">
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
