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
} from "@mui/material";
import { auth } from "../../context/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import { AlertComponent } from "../../components";

export default function FormDialog({
  openForgotPassDialog,
  setOpenForgotPassDialog,
}) {
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
          message: "Email enviado com sucesso.",
        });
        setTimeout(() => {
          handleClose();
        }, 1000);
      })
      .catch((error) => {
        setAlertComponent({
          openAlert: true,
          severity: "error",
          message: "Email não cadastrado em nossa base de dados.",
        });

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
      <AlertComponent
        alertComponent={alertComponent}
        setAlertComponent={setAlertComponent}
      />
    </>
  );
}
