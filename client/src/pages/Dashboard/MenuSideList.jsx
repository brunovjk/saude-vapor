import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import MyAccount from "./MyAccount";
import Publish from "./Publish";

export default function MenuSideList({ setItemSelected }) {
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
            <ListItemText primary="Minha conta" />
          </ListItem>

          {/* {!props.isAuth && ( */}

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
            <ListItemText primary="Publicar" />
          </ListItem>
          {/* )} */}
        </Box>

        <Box>
          <ListItem button disableGutters>
            <ListItemIcon>
              <ExitToAppIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Sair" />
          </ListItem>
        </Box>
      </Box>
    </List>
  );
}
