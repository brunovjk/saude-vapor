import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { auth } from "../../context/firebase-config";
import { deleteUser } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import { AlertComponent } from "../../components";

export default function DeleteDialog({
  openDeleteDialog,
  setOpenDeleteDialog,
}) {
  let navigate = useNavigate();
  const { setIsAuth } = useContext(Context);

  const [alertComponent, setAlertComponent] = useState({
    openAlert: false,
    severity: "success",
    message: "",
  });

  const deleteAccount = () => {
    try {
      const user = auth.currentUser;

      deleteUser(user)
        .then(() => {
          setAlertComponent({
            openAlert: true,
            severity: "success",
            message: "Conta deletada com sucesso.",
          });
          localStorage.clear();
          setIsAuth(false);
          setTimeout(() => {
            navigate("/");
          }, 1000);
        })
        .catch((error) => {
          setAlertComponent({
            openAlert: true,
            severity: "error",
            message: "Não foi possível deletar sua conta.",
          });
        });
    } catch (error) {}
  };

  const handleClose = () => {
    setOpenDeleteDialog(false);
  };

  return (
    <>
      <Dialog
        open={openDeleteDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Certeza que deseja deletar sua conta?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sua conta sera deletada permanentemente, não sendo possível
            recupera-lá. Mas você pode criar uma conta nova a qualquer momento.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={deleteAccount} autoFocus>
            Deletar
          </Button>
        </DialogActions>
      </Dialog>

      <AlertComponent
        alertComponent={alertComponent}
        setAlertComponent={setAlertComponent}
      />
    </>
  );
}
