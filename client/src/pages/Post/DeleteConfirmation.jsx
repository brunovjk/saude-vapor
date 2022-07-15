import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { db } from "../../context/firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import { AlertComponent } from "../../components";
import { useNavigate } from "react-router-dom";

export default function DeleteConfirmation({
  blogId,
  openDeleteConfirmation,
  setOpenDeleteConfirmation,
}) {
  let navigate = useNavigate();
  const [alertComponent, setAlertComponent] = useState({
    openAlert: false,
    severity: "success",
    message: "",
  });

  const deletePost = async () => {
    try {
      await deleteDoc(doc(db, "postsBlog", blogId));
      setAlertComponent({
        openAlert: true,
        severity: "success",
        message: "Post deletado com sucesso.",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setAlertComponent({
        openAlert: true,
        severity: "error",
        message: "Você não tem permissão para deletar este post.",
      });
    }
  };

  const handleClose = () => {
    setOpenDeleteConfirmation(false);
  };

  return (
    <>
      <Dialog
        open={openDeleteConfirmation}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deletar Post"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Tem certeza que deseja deletar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={deletePost} autoFocus>
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
