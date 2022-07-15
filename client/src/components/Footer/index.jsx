import React from "react";
import { Box, Grid, Divider, Typography, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Logo from "../../assets/img/logo/Logo32-white.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <Box component="div" bgcolor="primary.60" mt="3rem">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="stretch"
          spacing={{ xs: 4, sm: 2 }}
          sx={{
            p: "1rem",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent={{ xs: "center", sm: "flex-start" }}
            alignItems="center"
            item
          >
            <Box
              sx={{
                pt: "0.8rem",
                pb: "0.5rem",
                pl: { sm: "2rem" },
              }}
            >
              <NavLink to="/">
                <img src={Logo} alt="SaudeVapor" />
              </NavLink>
            </Box>
          </Grid>
          <Grid item>
            <Grid
              container
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <Grid item>
                <Grid
                  container
                  spacing={{ xs: 1, sm: 5 }}
                  sx={{
                    pl: { sm: "1rem" },
                    pb: "1rem",
                  }}
                  direction={{ xs: "column", sm: "row" }}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <NavLink to="/sobre">
                      <Typography variant="menu" color="secondary">
                        {t("Footer.menu.about")}
                      </Typography>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/contato">
                      <Typography variant="menu" color="secondary">
                        {t("Footer.menu.contact")}
                      </Typography>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/busca">
                      <Typography variant="menu" color="secondary">
                        {t("Footer.menu.search")}
                      </Typography>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/login">
                      <Typography variant="menu" color="secondary">
                        {t("Footer.menu.login")}
                      </Typography>
                    </NavLink>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  sx={{
                    pr: { sm: "1rem" },
                  }}
                  spacing={4}
                >
                  <Grid item>
                    <Link
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      href={t("SocialMediaLinks.facebook")}
                    >
                      <FacebookIcon color="secondary" />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      href={t("SocialMediaLinks.twitter")}
                    >
                      <TwitterIcon color="secondary" />
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      target="_blank"
                      rel="noopener"
                      underline="none"
                      href={t("SocialMediaLinks.instagram")}
                    >
                      <InstagramIcon color="secondary" />
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Divider variant="middle" color="white" />
          </Grid>
          <Grid item>
            <Grid
              container
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
              sx={{
                px: { sm: "1rem" },
              }}
            >
              <Grid item>
                <NavLink to="/termos">
                  <Typography variant="underline1" color="secondary">
                    {t("Footer.terms")}
                  </Typography>
                </NavLink>
              </Grid>
              <Grid item>
                <Typography variant="underline1" color="secondary">
                  {t("Footer.copyright")}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
