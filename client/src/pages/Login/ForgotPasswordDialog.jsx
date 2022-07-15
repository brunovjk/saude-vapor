import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { auth } from "../../context/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { AlertComponent } from "../../components";

export default function FormDialog({
  openForgotPassDialog,
  setOpenForgotPassDialog,
}) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [alertComponent, setAlertComponent] = useState({
    openAlert: false,
    severity: "success",
    message: "",
  });

  const handleEmailChange = (value) => {
    setEmail(value.target.value);
  };

  const handleClose = () => {
    setOpenForgotPassDialog(false);
  };

  const handleSendRequest = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setAlertComponent({
          openAlert: true,
          severity: "success",
          message: t("Login.forgotPassword.alert1"),
        });
        setTimeout(() => {
          handleClose();
        }, 1000);
      })
      .catch((error) => {
        setAlertComponent({
          openAlert: true,
          severity: "error",
          message: t("Login.forgotPassword.alert2"),
        });

        handleClose();
      });
  };

  return (
    <>
      <Dialog open={openForgotPassDialog} onClose={handleClose}>
        <Box component="form" onSubmit={handleSendRequest}>
          <DialogTitle>{t("Login.forgotPassword.title")}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {t("Login.forgotPassword.text")}
            </DialogContentText>
            <TextField
              required
              margin="dense"
              id="email"
              label={t("Login.forgotPassword.textField")}
              type="email"
              fullWidth
              variant="standard"
              onChange={handleEmailChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>
              {t("Login.forgotPassword.button1")}
            </Button>
            <Button type="submit">
              {t("Login.forgotPassword.button2")}Enviar
            </Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Alert */}
      <AlertComponent
        alertComponent={alertComponent}
        setAlertComponent={setAlertComponent}
      />
    </>
  );
}
