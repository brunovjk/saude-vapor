import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function DeleteConfirmation({
  openDeleteConfirmation,
  setOpenDeleteConfirmation,
  deletePost,
}) {
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
    </>
  );
}
