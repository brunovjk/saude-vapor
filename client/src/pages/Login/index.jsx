import React, { useState, useContext } from "react";
import {
  Typography,
  TextField,
  Grid,
  Divider,
  Button,
  Paper,
  Alert,
  Box,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import accountImg from "../../assets/img/accountImg.jpg";

import { Context } from "../../context/Context";

import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import {
  auth,
  providerGoogle,
  providerFacebook,
} from "../../context/firebase-config";
import { useNavigate } from "react-router-dom";
import ForgotPasswordDialog from "./ForgotPasswordDialog";

export default function Login() {
  let navigate = useNavigate();
  const { setIsAuth } = useContext(Context);

  const [alertMessage, setAlertMessage] = useState("");
  const [openForgotPassDialog, setOpenForgotPassDialog] = useState(false);

  const [editValues, setEditValues] = useState({
    email: "",
    password: "",
  });

  const handleClickOpenForgotPassDialog = () => {
    setOpenForgotPassDialog(true);
  };

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  const signInWithEmailPassword = (e) => {
    e.preventDefault();

    if (editValues.email !== undefined && editValues.password !== undefined) {
      signInWithEmailAndPassword(auth, editValues.email, editValues.password)
        .then((result) => {
          localStorage.setItem("isAuth", true);
          setIsAuth(true);
          navigate("/");
        })
        .catch((error) => {
          setAlertMessage("Falha no login, confira e-mail e senha.");
        });
    }
  };
  const SingInWithGoogle = () => {
    try {
      setAlertMessage("");
      signInWithPopup(auth, providerGoogle).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      });
    } catch {
      setAlertMessage("Falha ao entrar com Google");
    }
  };
  const SingInWithFacebook = () => {
    try {
      setAlertMessage("");

      signInWithPopup(auth, providerFacebook).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      });
    } catch {
      setAlertMessage("Falha ao entrar com Google");
    }
  };

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
        <Grid item xs={12} sm={7} md={5}>
          <Box component="form" onSubmit={signInWithEmailPassword}>
            <Grid
              container
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
              <Grid item>
                <Typography variant="subtitle" color="text.primary">
                  Uma só conta para toda plataforma SaudeVapor
                </Typography>
              </Grid>
              {/* Alert */}
              <Grid item>
                <Box sx={{ height: "48px" }}>
                  {alertMessage && (
                    <Alert severity="error">{alertMessage}</Alert>
                  )}
                </Box>
              </Grid>
              {/* E-Mail field */}
              <Grid item>
                <TextField
                  fullWidth={true}
                  id="email"
                  required
                  type="email"
                  label="E-Mail"
                  variant="outlined"
                  onChange={handleChangeValues}
                />
              </Grid>
              {/* Senha field */}
              <Grid item>
                <TextField
                  fullWidth={true}
                  id="password"
                  required
                  type="password"
                  label="Senha"
                  variant="outlined"
                  onChange={handleChangeValues}
                />
              </Grid>
              {/* Login button */}
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "24px",
                }}
              >
                <Button
                  fullWidth={true}
                  type="submit"
                  sx={{ mx: { xs: "16px", sm: "32px" } }}
                >
                  ENTRAR
                </Button>
              </Grid>
              {/* Create call */}
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" color="text.primary">
                  Não tem conta?
                </Typography>
                <NavLink to="/criarconta">
                  <Typography variant="body2" color="primary.30">
                     CADASTRE-SE.
                  </Typography>
                </NavLink>
              </Grid>
              {/* Forgot Password */}
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  componenet="span"
                  variant="body2"
                  sx={{
                    cursor: "pointer",
                    color: "text.primary",
                    "&:hover": { color: "primary.40" },
                  }}
                  onClick={handleClickOpenForgotPassDialog}
                >
                  Esqueceu a senha?
                </Typography>
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
                  ou entre com
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
                  <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    onClick={SingInWithGoogle}
                  >
                    Google
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<FacebookIcon />}
                    onClick={SingInWithFacebook}
                  >
                    Facebook
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
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

        {/* Forgot password dialog */}
        <ForgotPasswordDialog
          openForgotPassDialog={openForgotPassDialog}
          setOpenForgotPassDialog={setOpenForgotPassDialog}
        />
      </Grid>
    </>
  );
}
