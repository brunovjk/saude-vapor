import React, { useState, useEffect, useContext } from "react";
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
        message: "Post editado com sucesso.",
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 1000);
    } catch (error) {
      setAlertComponent({
        openAlert: true,
        severity: "error",
        message: "Você não tem permissão para editar este post.",
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
        <DialogTitle>Editar Post</DialogTitle>
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
              label="Titulo"
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
                label="Categoria"
                type="text"
                fullWidth
                defaultValue={postData.category}
                onChange={handleChangeValues}
              />
              <TextField
                autoFocus
                margin="dense"
                id="date"
                label="Data"
                type="text"
                fullWidth
                defaultValue={postData.date}
                onChange={handleChangeValues}
              />
              <TextField
                autoFocus
                margin="dense"
                id="author"
                label="Autor"
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
              label="Link Autor"
              type="text"
              fullWidth
              defaultValue={postData.linkAuthor}
              onChange={handleChangeValues}
            />

            <TextField
              autoFocus
              margin="dense"
              id="urlImage"
              label="Link image"
              type="text"
              fullWidth
              defaultValue={postData.urlImage}
              onChange={handleChangeValues}
            />
            <TextField
              autoFocus
              margin="dense"
              id="text"
              label="Texto"
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
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={editPost}>Editar</Button>
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
