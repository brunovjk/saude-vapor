import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  TextField,
  Dialog,
  Stack,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import { db } from "../../context/firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { AlertComponent } from "../../components";
import { Context } from "../../context/Context";

export default function DialogEdit({ open, setOpen, blogId, postData }) {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(Context);

  const [editValues, setEditValues] = useState(postData);
  const [alertComponent, setAlertComponent] = useState({
    openAlert: false,
    severity: "success",
    message: "",
  });

  useEffect(() => {
    setEditValues(postData);
  }, [postData]);

  const handleChangeValues = (value) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [value.target.id]: value.target.value,
    }));
  };

  const editPost = async () => {
    try {
      await updateDoc(
        doc(db, "postsBlog", `${selectedLanguage}`, "posts", blogId),
        {
          title: editValues.title,
          category: editValues.category,
          date: editValues.date,
          author: editValues.author,
          linkAuthor: editValues.linkAuthor,
          urlImage: editValues.urlImage,
          text: editValues.text,
        }
      );
      handleClose();
      setAlertComponent({
        openAlert: true,
        severity: "success",
        message: t("Post.edit.alert.alert1"),
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    } catch (error) {
      setAlertComponent({
        openAlert: true,
        severity: "error",
        message: t("Post.edit.alert.alert2"),
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
        <DialogTitle>{t("Post.edit.text")}</DialogTitle>
        <DialogContent>
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="strech"
            spacing={2}
            sx={{ pt: "16px" }}
          >
            <TextField
              autoFocus
              id="title"
              label={t("Post.edit.textField.title")}
              type="text"
              fullWidth
              defaultValue={postData.title}
              onChange={handleChangeValues}
            />

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <TextField
                autoFocus
                margin="dense"
                id="category"
                label={t("Post.edit.textField.category")}
                type="text"
                fullWidth
                defaultValue={postData.category}
                onChange={handleChangeValues}
              />
              <TextField
                autoFocus
                margin="dense"
                id="date"
                label={t("Post.edit.textField.date")}
                type="text"
                fullWidth
                defaultValue={postData.date}
                onChange={handleChangeValues}
              />
              <TextField
                autoFocus
                margin="dense"
                id="author"
                label={t("Post.edit.textField.author")}
                type="text"
                fullWidth
                defaultValue={postData.author}
                onChange={handleChangeValues}
              />
            </Stack>
            <TextField
              autoFocus
              margin="dense"
              id="linkAuthor"
              label={t("Post.edit.textField.linkAuthor")}
              type="text"
              fullWidth
              defaultValue={postData.linkAuthor}
              onChange={handleChangeValues}
            />

            <TextField
              autoFocus
              margin="dense"
              id="urlImage"
              label={t("Post.edit.textField.urlImage")}
              type="text"
              fullWidth
              defaultValue={postData.urlImage}
              onChange={handleChangeValues}
            />
            <TextField
              autoFocus
              margin="dense"
              id="text"
              label={t("Post.edit.textField.text")}
              type="text"
              multiline
              minRows={4}
              fullWidth
              defaultValue={postData.text}
              onChange={handleChangeValues}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t("Post.edit.button.cancel")}</Button>
          <Button onClick={editPost}>{t("Post.edit.button.edit")}</Button>
        </DialogActions>
      </Dialog>
      {/* Alert */}
      <AlertComponent
        alertComponent={alertComponent}
        setAlertComponent={setAlertComponent}
      />
    </>
  );
}
