import React, { useState, useContext } from "react";
import {
  Typography,
  TextField,
  FormControlLabel,
  Grid,
  Box,
  Checkbox,
  Divider,
  Button,
  Paper,
  Alert,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

import accountImg from "../../assets/img/accountImg.jpg";

import { Context } from "../../context/Context";

import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import {
  auth,
  providerGoogle,
  providerFacebook,
} from "../../context/firebase-config";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  let navigate = useNavigate();
  const { setIsAuth, setCurrentUser } = useContext(Context);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertMessageType, setAlertMessageType] = useState("");
  const [editValues, setEditValues] = useState({
    email: "",
    password: "",
    passwordCheck: "",
    agreeCheck: "",
  });

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };
  const CreateWithEmailAndPassword = (e) => {
    e.preventDefault();
    if (editValues.password !== editValues.passwordCheck) {
      setAlertMessage("As senhas não coincidem.");
      setAlertMessageType("error");
      return;
    }
    if (editValues.password.length < 6) {
      setAlertMessage("A senha deve ter pelo menos 6 caracteres.");
      setAlertMessageType("error");
      return;
    }
    if (editValues.agreeCheck !== "on") {
      setAlertMessage("Você precisa aceitar os termos.");
      setAlertMessageType("error");
      return;
    }

    if (editValues.email !== undefined && editValues.password !== undefined) {
      try {
        setAlertMessage("");
        createUserWithEmailAndPassword(
          auth,
          editValues.email,
          editValues.password
        ).then((result) => {
          setAlertMessage("Conta criada com sucesso");
          setAlertMessageType("success");
          setCurrentUser(result.user);
          localStorage.setItem("isAuth", true);
          setIsAuth(true);
          navigate("/");
        });
      } catch {
        setAlertMessage("Não foi possível criar sua conta.");
        setAlertMessageType("error");
      }
    }
  };
  const SingInWithGoogle = () => {
    try {
      setAlertMessage("");
      signInWithPopup(auth, providerGoogle).then((result) => {
        setAlertMessage("Conta criada com sucesso");
        setAlertMessageType("success");
        setCurrentUser(result.user);
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      });
    } catch {
      setAlertMessage("Falha ao entrar com Gogle");
      setAlertMessageType("error");
    }
  };
  const SingInWithFacebook = () => {
    try {
      setAlertMessage("");

      signInWithPopup(auth, providerFacebook).then((result) => {
        setAlertMessage("Conta criada com sucesso");
        setAlertMessageType("success");
        setCurrentUser(result.user);
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
      });
    } catch {
      setAlertMessage("Falha ao entrar com Facebook");
      setAlertMessageType("error");
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
          <Box component="form" onSubmit={CreateWithEmailAndPassword}>
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
                  Crie a sua conta única para toda plataforma SaudeVapor
                </Typography>
              </Grid>
              {/* Alert */}
              <Grid item>
                <Box sx={{ height: "48px" }}>
                  {alertMessage && (
                    <Alert severity={alertMessageType}>{alertMessage}</Alert>
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
              {/* Confirmar Senha field */}
              <Grid item>
                <TextField
                  fullWidth={true}
                  id="passwordCheck"
                  required
                  type="password"
                  label="Confirmar Senha"
                  variant="outlined"
                  onChange={handleChangeValues}
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
                <FormControlLabel
                  id="agreeCheck"
                  control={
                    <Checkbox id="agreeCheck" onChange={handleChangeValues} />
                  }
                  sx={{ p: "24px" }}
                  onChange={handleChangeValues}
                />
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
                <Button
                  type="submit"
                  fullWidth={true}
                  sx={{ mx: { xs: "16px", sm: "32px" } }}
                >
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
      </Grid>
    </>
  );
}
