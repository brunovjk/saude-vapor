import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Typography,
  IconButton,
  Box,
  AppBar,
  Grid,
  Slide,
  useScrollTrigger,
  Avatar,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
} from "@mui/material";
import LanguageSelect from "../LanguageSelect";

import LogoMobileLight from "../../assets/img/logo/Logo24-primary-30.svg";
import LogoDesktopLight from "../../assets/img/logo/Logo32-primary-30.svg";

import LogoMobileDark from "../../assets/img/logo/Logo24-primary-80.svg";
import LogoDesktopDark from "../../assets/img/logo/Logo32-primary-80.svg";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Logout from "@mui/icons-material/Logout";
import EmailIcon from "@mui/icons-material/Email";
import LanguageIcon from "@mui/icons-material/Language";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

import { Context } from "../../context/Context";

import { auth } from "../../context/firebase-config";
import { signOut } from "firebase/auth";

import { Link, useNavigate } from "react-router-dom";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function ToolbarComponent(props) {
  const { t } = useTranslation();
  const { isAuth, setIsAuth, checked } = useContext(Context);
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
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
    <HideOnScroll {...props}>
      <AppBar color="inherit" position="sticky">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
          px={{ xs: "0.3rem", md: "2rem" }}
        >
          <Grid item>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item>
                  <Box>
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="center"
                    >
                      <Grid item>
                        <Box
                          sx={{
                            display: { xs: "block", sm: "none" },
                          }}
                        >
                          <IconButton
                            aria-label="open drawer"
                            onClick={props.openDrawerHandler}
                            color="primary"
                            size="small"
                          >
                            <MenuIcon />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            display: { xs: "none", sm: "block" },
                          }}
                        >
                          <IconButton
                            aria-label="open drawer1"
                            onClick={props.openDrawerHandler}
                            color="primary"
                          >
                            <MenuIcon />
                          </IconButton>
                        </Box>
                      </Grid>

                      <Grid item>
                        <Box
                          sx={{
                            display: { xs: "none", md: "block" },
                          }}
                        >
                          <IconButton
                            aria-label="open drawer2"
                            onClick={props.openDrawerHandler}
                            color="primary"
                          >
                            <Typography variant="button">
                              {t("Navbar.toolbar.menu")}
                            </Typography>
                          </IconButton>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Box
                    sx={{
                      display: { xs: "block", md: "none" },
                      pt: "0.8rem",
                      pb: "0.3rem",
                    }}
                  >
                    <Link to="/">
                      <img
                        src={
                          checked === "true" || checked === true
                            ? LogoMobileDark
                            : LogoMobileLight
                        }
                        alt="Saude Vapor"
                      />
                    </Link>
                  </Box>
                </Grid>
                <Grid item>
                  <Box
                    sx={{
                      display: { xs: "none", md: "block" },
                      p: "1rem",
                    }}
                  >
                    <Link to="/">
                      <img
                        src={
                          checked === "true" || checked === true
                            ? LogoDesktopDark
                            : LogoDesktopLight
                        }
                        alt="Icon SaudeVapor"
                      />
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                wrap="nowrap"
              >
                <Grid item>
                  <Box>
                    <Link to="/busca">
                      <Box
                        sx={{
                          display: { xs: "block", sm: "none" },
                        }}
                      >
                        <IconButton color="primary" size="small">
                          <SearchIcon />
                        </IconButton>
                      </Box>
                      <Box
                        sx={{
                          display: { xs: "none", sm: "block" },
                        }}
                      >
                        <IconButton color="primary">
                          <SearchIcon />
                        </IconButton>
                      </Box>
                    </Link>
                  </Box>
                </Grid>

                <Grid item>
                  <Box>
                    {!isAuth ? (
                      <Link to="/login">
                        <Box
                          sx={{
                            display: { xs: "block", sm: "none" },
                          }}
                        >
                          <IconButton color="primary" size="small">
                            <PersonOutlineOutlinedIcon />
                          </IconButton>
                        </Box>
                        <Box
                          sx={{
                            display: { xs: "none", sm: "block" },
                          }}
                        >
                          <IconButton color="primary">
                            <PersonOutlineOutlinedIcon />
                          </IconButton>
                        </Box>
                      </Link>
                    ) : (
                      <>
                        <Box
                          sx={{
                            display: { xs: "block", sm: "none" },
                          }}
                        >
                          <Tooltip
                            title={t("Navbar.toolbar.tolltipAccountConfig")}
                          >
                            <IconButton
                              color="primary"
                              size="small"
                              onClick={handleClick}
                              aria-controls={open ? "account-menu" : undefined}
                              aria-haspopup="true"
                              aria-expanded={open ? "true" : undefined}
                            >
                              <Avatar
                                sx={{
                                  width: 24,
                                  height: 24,
                                  bgcolor: "primary.50",
                                }}
                              ></Avatar>
                            </IconButton>
                          </Tooltip>
                        </Box>
                        <Box
                          sx={{
                            display: { xs: "none", sm: "block" },
                          }}
                        >
                          <IconButton
                            color="primary"
                            onClick={handleClick}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                          >
                            <Avatar
                              sx={{
                                width: 32,
                                height: 32,
                                bgcolor: "primary.50",
                              }}
                            ></Avatar>
                          </IconButton>
                        </Box>
                      </>
                    )}
                  </Box>
                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          ml: -0.5,
                          mr: 1,
                        },
                        "&:before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/minhaconta">
                      <MenuItem onClick={handleClose}>
                        <Avatar
                          sx={{
                            bgcolor: "primary.50",
                          }}
                        />
                        <Typography variant="menu">
                          {t("Navbar.toolbar.myAccount")}
                        </Typography>
                      </MenuItem>
                    </Link>

                    <Divider sx={{ py: "4px" }} />

                    <MenuItem>
                      <ListItemIcon>
                        <LanguageIcon fontSize="small" color="primary" />
                      </ListItemIcon>
                      <LanguageSelect onClickProps={handleClose} small={true} />
                    </MenuItem>

                    <Link to="/contato">
                      <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                          <EmailIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <Typography variant="menu">
                          {t("Navbar.toolbar.contact")}
                        </Typography>
                      </MenuItem>
                    </Link>

                    <MenuItem onClick={signUserOut}>
                      <ListItemIcon>
                        <Logout fontSize="small" color="primary" />
                      </ListItemIcon>
                      <Typography variant="menu">
                        {t("Navbar.toolbar.logout")}
                      </Typography>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    </HideOnScroll>
  );
}
