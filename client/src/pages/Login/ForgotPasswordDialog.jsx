import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
  Snackbar,
} from "@mui/material";
import { auth } from "../../context/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";

export default function FormDialog({
  openForgotPassDialog,
  setOpenForgotPassDialog,
}) {
  const [email, setEmail] = useState("");
  const [typeAlert, setTypeAlert] = useState();
  const [alertMessage, setAlertMessage] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value.target.value);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertMessage(false);
  };

  const handleClose = () => {
    setOpenForgotPassDialog(false);
  };

  const handleSendRequest = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setTypeAlert("success");
        setErrorMessage("Email enviado com successo.");
        setAlertMessage(true);
        handleClose();
      })
      .catch((error) => {
        setTypeAlert("error");
        setErrorMessage("Email não cadastrado em nossa base de dados");
        setAlertMessage(true);
        handleClose();
      });
  };

  return (
    <>
      <Dialog open={openForgotPassDialog} onClose={handleClose}>
        <Box component="form" onSubmit={handleSendRequest}>
          <DialogTitle>Editar Senha</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Informe seu e-mail e será enviado um link para alterar sua senha.
              Obrigado!
            </DialogContentText>
            <TextField
              required
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              onChange={handleEmailChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button type="submit">Enviar</Button>
          </DialogActions>
        </Box>
      </Dialog>

      {/* Alert */}
      <Snackbar
        open={alertMessage}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={typeAlert}
          sx={{ width: "100%" }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
