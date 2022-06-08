import React from "react";
import { Box, Grid, Divider, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

import Logo from "../../assets/img/logo/Logo32-white.svg";

import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
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
                <img src={Logo} alt="Saude Vapor" />
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
                        Sobre
                      </Typography>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/contato">
                      <Typography variant="menu" color="secondary">
                        Contato
                      </Typography>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/busca">
                      <Typography variant="menu" color="secondary">
                        Busca
                      </Typography>
                    </NavLink>
                  </Grid>
                  <Grid item>
                    <NavLink to="/login">
                      <Typography variant="menu" color="secondary">
                        Login
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
                    <FacebookIcon color="secondary" />
                  </Grid>
                  <Grid item>
                    <TwitterIcon color="secondary" />
                  </Grid>
                  <Grid item>
                    <InstagramIcon color="secondary" />
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
                    Termos de uso
                  </Typography>
                </NavLink>
              </Grid>
              <Grid item>
                <Typography variant="underline1" color="secondary">
                  © 2022 SaudeVapor. Todos direitos reservados.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}