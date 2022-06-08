import React from "react";
import {
  Typography,
  TextField,
  FormControlLabel,
  Grid,
  Checkbox,
  Divider,
  Button,
  Paper,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import accountImg from "../../assets/img/accountImg.jpg";

export default function CreateAccount() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        sx={{
          py: { xs: "16px", sm: "32x", md: "64px" },
        }}
      >
        {/* Form */}
        <Grid
          container
          item
          xs={12}
          sm={7}
          md={5}
          px={{ xs: "16px", sm: "32x", md: "64px" }}
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={2}
        >
          {/* Page title */}
          <Grid item>
            <Typography variant="h1" color="primary.30">
              Conta SaudeVapor
            </Typography>
          </Grid>
          {/* body */}
          <Grid item sx={{ mb: { xs: "12px", sm: "24px" } }}>
            <Typography variant="subtitle" color="text.primary">
              Crie a sua conta única para toda plataforma SaudeVapor
            </Typography>
          </Grid>
          {/* Nome field */}
          <Grid item>
            <TextField
              fullWidth={true}
              id="Nome-field"
              label="Nome"
              variant="outlined"
            />
          </Grid>
          {/* E-Mail field */}
          <Grid item>
            <TextField
              fullWidth={true}
              id="E-Mail-field"
              label="E-Mail"
              variant="outlined"
            />
          </Grid>
          {/* Senha field */}
          <Grid item>
            <TextField
              fullWidth={true}
              id="Senha-field"
              label="Senha"
              variant="outlined"
            />
          </Grid>
          {/* Agree check */}
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FormControlLabel control={<Checkbox />} sx={{ p: "24px" }} />
            <Typography variant="underline1" color="text.primary">
              Li e concordo com os 
              <NavLink to="/termos">
                <Typography variant="underline1" color="primary.30">
                  Termos de Uso e Política de Privacidade
                </Typography>
              </NavLink>
              .
            </Typography>
          </Grid>
          {/* Create button */}
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button fullWidth={true} sx={{ mx: { xs: "16px", sm: "32px" } }}>
              CADASTRAR
            </Button>
          </Grid>
          {/* Login call */}
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.primary">
              Já tem uma conta?
            </Typography>
            <NavLink to="/login">
              <Typography variant="body2" color="primary.30">
                 ENTRE.
              </Typography>
            </NavLink>
          </Grid>
          {/* text */}
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Divider sx={{ width: "64px" }} />
            <Typography
              variant="underline1"
              color="text.secondary"
              sx={{ p: "16px" }}
            >
              ou cadastre-se com
            </Typography>
            <Divider sx={{ width: "64px" }} />
          </Grid>
          {/* Create with Google/Facebook */}
          <Grid
            container
            item
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Grid item>
              <Button variant="outlined" startIcon={<GoogleIcon />}>
                Google
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" startIcon={<FacebookIcon />}>
                Facebook
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* Image */}
        <Grid container item xs={0} sm={5} md={7}>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              borderRadius: "40px 0px 0px 40px",
              backgroundImage: `url(${accountImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Paper>
        </Grid>
      </Grid>
    </>
  );
}
