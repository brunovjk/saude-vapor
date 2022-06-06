import React from "react";
import { Grid, Paper, Typography, Box, Switch, Button } from "@mui/material";

import Logo24primary20 from "../assets/img/logo/Logo24-primary-20.svg";
import Logo24primary30 from "../assets/img/logo/Logo24-primary-30.svg";
import Logo24primary80 from "../assets/img/logo/Logo24-primary-80.svg";
import Logo24primary100 from "../assets/img/logo/Logo24-primary-100.svg";
import Logo32primary20 from "../assets/img/logo/Logo32-primary-20.svg";
import Logo32primary30 from "../assets/img/logo/Logo32-primary-30.svg";
import Logo32primary80 from "../assets/img/logo/Logo32-primary-80.svg";
import Logo32primary100 from "../assets/img/logo/Logo32-primary-100.svg";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InstagramIcon from "@mui/icons-material/Instagram";
import FeedIcon from "@mui/icons-material/Feed";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import CloseIcon from "@mui/icons-material/Close";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import LogoutIcon from "@mui/icons-material/Logout";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import AddIcon from "@mui/icons-material/Add";
import DownloadIcon from "@mui/icons-material/Download";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Styleguide({ setChecked }) {
  const handleChange = () => {
    setChecked((c) => !c);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ backgroundColor: "secondary.99", height: "100%", p: "24px" }}
      >
        <Grid item xs={12}>
          <Paper
            elevation={5}
            sx={{ backgroundColor: "secondary.95", p: "16px" }}
          >
            <Typography>
              light Mode
              <Switch
                onChange={handleChange}
                // defaultChecked={!!localStorage.getItem("checked")}
              />
              dark Mode
            </Typography>
          </Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper elevation={5} sx={{ backgroundColor: "secondary.95" }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="headline">
                  headline M-64/71/0-42/48/0
                </Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="h1">h1 M-36/44/0-28/36/0</Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="h2">h2 M-28/36/0-14/20/0.1</Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="h3">h3 M-22/28/0-22/28/0</Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="menu">
                  menu M-20/24/0.15-14/18/0.25
                </Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="subtitle">
                  subtitle M-24/32/0-16/24/0.15
                </Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="underline1">
                  unerline1 M-14/20/0.1-12/16/0.4
                </Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="underline2">
                  unerline2 M-12/16/0.4-11/16/0.5
                </Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="overline">
                  overline M-12/16/0.4-11/16/0.5
                </Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="button">
                  button M-16/24/0.5-14/20/0.1
                </Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="body1">
                  body1 M-20/24/0.15-16/24/0.5
                </Typography>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Typography variant="body2">
                  body2 M-16/24/0.5-14/20/0.1
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={2.5}>
          <Paper elevation={5} sx={{ backgroundColor: "secondary.95" }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "16px" }}>
                    <Typography variant="title3" color="primary">
                      Primary
                    </Typography>
                  </Grid>
                  <Grid item sx={{ p: "16px" }}>
                    <Grid
                      container
                      direction="column"
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.0",
                          }}
                        >
                          <Typography color="primary.100">0</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.10",
                          }}
                        >
                          <Typography color="primary.99">10</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.20",
                          }}
                        >
                          <Typography color="primary.95">20</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.30",
                          }}
                        >
                          <Typography color="primary.90">30</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.40",
                          }}
                        >
                          <Typography color="primary.80">40</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.50",
                          }}
                        >
                          <Typography color="primary.70">50</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.60",
                          }}
                        >
                          <Typography color="primary.60">60</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.70",
                          }}
                        >
                          <Typography color="primary.50">70</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.80",
                          }}
                        >
                          <Typography color="primary.40">80</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.90",
                          }}
                        >
                          <Typography color="primary.30">90</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.95",
                          }}
                        >
                          <Typography color="primary.20">95</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.99",
                          }}
                        >
                          <Typography color="primary.10">99</Typography>
                        </Paper>
                      </Grid>
                      <Grid item>
                        <Paper
                          elevation={5}
                          sx={{
                            borderRadius: "8px",
                            width: "32px",
                            height: "32px",
                            backgroundColor: "primary.100",
                          }}
                        >
                          <Typography color="primary.0">100</Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid
                  container
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "16px" }}>
                    <Typography variant="title3" color="secondary">
                      Secondary
                    </Typography>
                  </Grid>
                  <Grid item sx={{ p: "16px" }}>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.0",
                        }}
                      >
                        <Typography color="secondary.100">0</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.10",
                        }}
                      >
                        <Typography color="secondary.99">10</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.20",
                        }}
                      >
                        <Typography color="secondary.95">20</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.30",
                        }}
                      >
                        <Typography color="secondary.90">30</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.40",
                        }}
                      >
                        <Typography color="secondary.80">40</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.50",
                        }}
                      >
                        <Typography color="secondary.70">50</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.60",
                        }}
                      >
                        <Typography color="secondary.60">60</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.70",
                        }}
                      >
                        <Typography color="secondary.50">70</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.80",
                        }}
                      >
                        <Typography color="secondary.40">80</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.90",
                        }}
                      >
                        <Typography color="secondary.30">90</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.95",
                        }}
                      >
                        <Typography color="secondary.20">95</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.99",
                        }}
                      >
                        <Typography color="secondary.10">99</Typography>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Paper
                        elevation={5}
                        sx={{
                          borderRadius: "8px",
                          width: "32px",
                          height: "32px",
                          backgroundColor: "secondary.100",
                        }}
                      >
                        <Typography color="secondary.0">100</Typography>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={2.5}>
          <Paper elevation={5} sx={{ backgroundColor: "secondary.95" }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item sx={{ p: "16px" }}>
                <Box
                  component="img"
                  src={Logo24primary20}
                  alt="Logo24-primary-20"
                />
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Box
                  component="img"
                  src={Logo24primary30}
                  alt="Logo24-primary-40"
                />
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Box
                  component="img"
                  src={Logo24primary80}
                  alt="Logo24-primary-80"
                />
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Box
                  component="img"
                  src={Logo24primary100}
                  alt="Logo24-primary-100"
                />
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Box
                  component="img"
                  src={Logo32primary20}
                  alt="Logo32-primary-20"
                />
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Box
                  component="img"
                  src={Logo32primary30}
                  alt="Logo32-primary-40"
                />
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Box
                  component="img"
                  src={Logo32primary80}
                  alt="Logo32-primary-80"
                />
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Box
                  component="img"
                  src={Logo32primary100}
                  alt="Logo32-primary-100"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={1.5}>
          <Paper elevation={5} sx={{ backgroundColor: "secondary.95" }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <MenuIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <MenuIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <SearchIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <SearchIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ShoppingCartIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ShoppingCartIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <InstagramIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <InstagramIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <FeedIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <FeedIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <PersonIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <PersonIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <GoogleIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <GoogleIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <TwitterIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <TwitterIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <CloseIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <CloseIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <FacebookIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <FacebookIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <EmojiObjectsIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <EmojiObjectsIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ChevronRightIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ChevronRightIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ChevronLeftIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ChevronLeftIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ExpandMoreIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ExpandMoreIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ExpandLessIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ExpandLessIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ArrowBackIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ArrowBackIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ArrowForwardIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ArrowForwardIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ArrowDownwardIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ArrowDownwardIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ArrowUpwardIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ArrowUpwardIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <FileUploadIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <FileUploadIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <LogoutIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <LogoutIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <MarkunreadIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <MarkunreadIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <AddIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <AddIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <DownloadIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <DownloadIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                >
                  <Grid item sx={{ p: "8px" }}>
                    <ShoppingBagIcon color="primary" fontSize="large" />
                  </Grid>
                  <Grid item sx={{ p: "8px" }}>
                    <ShoppingBagIcon color="primary" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={1.5}>
          <Paper elevation={5} sx={{ backgroundColor: "secondary.95" }}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid item sx={{ p: "16px" }}>
                <Button>button</Button>
              </Grid>
              <Grid item sx={{ p: "16px" }}>
                <Button variant="outlined">button</Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
