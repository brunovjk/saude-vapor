import React, { useContext } from "react";
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

import { Context } from "../../context/Context";

import { Link } from "react-router-dom";

const DrawerComponent = (props) => {
  const { checked, handleChangeDarkMode } = useContext(Context);

  const sideList = () => (
    <Box
      sx={{ width: { xs: "14rem", md: "15rem" }, p: { xs: "1rem" } }}
      onClick={props.toggleDrawerHandler}
    >
      <Box sx={{ p: "1rem" }}>
        <Link to="/">
          <img src={props.checked ? LogoDark : LogoLight} alt="Logo" />
        </Link>
      </Box>

      <Divider />

      <List>
        <Link to="/sobre">
          <ListItem button>
            <ListItemIcon>
              <InfoIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sobre" />
          </ListItem>
        </Link>
        <Link to="/busca">
          <ListItem button>
            <ListItemIcon>
              <SearchIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Busca" />
          </ListItem>
        </Link>
        <Link to="/contato">
          <ListItem button>
            <ListItemIcon>
              <EmailIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Contato" />
          </ListItem>
        </Link>
        {!props.isAuth ? (
          <Link to="/login">
            <ListItem button>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
          </Link>
        ) : (
          <Link to="/minhaconta">
            <ListItem button>
              <ListItemIcon>
                <PersonIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Minha conta" />
            </ListItem>
          </Link>
        )}
        <Link to="/blockchain">
          <ListItem button>
            <ListItemIcon>
              <GridViewIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Blockchain" />
          </ListItem>
        </Link>

        <ListItem button>
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
          <ListItem button disableGutters>
            <ListItemIcon>
              <HistoryEduIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Termos de uso" />
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
