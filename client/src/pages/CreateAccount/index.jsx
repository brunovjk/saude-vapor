import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
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
import { Link } from "react-router-dom";
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
  const { t } = useTranslation();
  const { setIsAuth } = useContext(Context);
  const [alertMessage, setAlertMessage] = useState("");
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
      setAlertMessage(t("createAccount.alert.alert1"));
      return;
    }
    if (editValues.password.length < 6) {
      setAlertMessage(t("createAccount.alert.alert2"));
      return;
    }
    if (editValues.agreeCheck !== "on") {
      setAlertMessage(t("createAccount.alert.alert3"));
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
          localStorage.setItem("isAuth", true);
          setIsAuth(true);
          navigate("/");
        });
      } catch {
        setAlertMessage(t("createAccount.alert.alert4"));
      }
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
      setAlertMessage(t("createAccount.alert.alert5"));
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
      setAlertMessage(t("createAccount.alert.alert6"));
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
                  {t("CreateAccount.form.header.title")}
                </Typography>
              </Grid>
              {/* body */}
              <Grid item>
                <Typography variant="subtitle" color="text.primary">
                  {t("CreateAccount.form.header.text")}
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
                  label={t("CreateAccount.form.textField.email")}
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
                  label={t("CreateAccount.form.textField.password")}
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
                  label={t("CreateAccount.form.textField.passwordCheck")}
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
                  {t("CreateAccount.form.text.agreeTerms1")}
                  <Link to="/termos">
                    <Typography variant="underline1" color="primary.30">
                      {t("CreateAccount.form.text.agreeTerms2")}
                    </Typography>
                  </Link>
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
                  {t("CreateAccount.form.button.singIn")}
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
                  {t("CreateAccount.form.text.text1")}
                </Typography>
                <Link to="/login">
                  <Typography variant="body2" color="primary.30">
                    {t("CreateAccount.form.button.logIn")}
                  </Typography>
                </Link>
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
                  {t("CreateAccount.form.text.text2")}
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
          />
        </Grid>
      </Grid>
    </>
  );
}
