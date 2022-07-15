import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
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
            message: t("Dashboard.deleteDialog.alert.alert1"),
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
            message: t("Dashboard.deleteDialog.alert.alert2"),
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
          {t("Dashboard.deleteDialog.alert.alert3")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("Dashboard.deleteDialog.text")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {t("Dashboard.deleteDialog.button.cancel")}
          </Button>
          <Button onClick={deleteAccount} autoFocus>
            {t("Dashboard.deleteDialog.button.delete")}
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
