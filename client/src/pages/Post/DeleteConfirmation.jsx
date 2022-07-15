import React, { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
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
import { Context } from "../../context/Context";

export default function DeleteConfirmation({
  blogId,
  openDeleteConfirmation,
  setOpenDeleteConfirmation,
}) {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(Context);

  let navigate = useNavigate();
  const [alertComponent, setAlertComponent] = useState({
    openAlert: false,
    severity: "success",
    message: "",
  });

  const deletePost = async () => {
    try {
      await deleteDoc(
        doc(db, "postsBlog", `${selectedLanguage}`, "posts", blogId)
      );
      setAlertComponent({
        openAlert: true,
        severity: "success",
        message: t("Post.delete.alert.alert1"),
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setAlertComponent({
        openAlert: true,
        severity: "error",
        message: t("Post.delete.alert.alert2"),
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
        <DialogTitle id="alert-dialog-title">
          {t("Post.delete.title")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("Post.delete.text")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            {t("Post.delete.button.cancel")}
          </Button>
          <Button onClick={deletePost} autoFocus>
            {t("Post.delete.button.delete")}
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
