import React, { useState, useEffect } from "react";
import {
  Button,
  TextField,
  Dialog,
  Stack,
  DialogActions,
  DialogContent,
  DialogTitle,
  Alert,
  Snackbar,
} from "@mui/material";

import { db } from "../../context/firebase-config";
import { doc, updateDoc } from "firebase/firestore";

export default function DialogEdit({ open, setOpen, blogId, postData }) {
  const [editValues, setEditValues] = useState(postData);
  const [openAlert, setOpenAlert] = useState(false);

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
    await updateDoc(doc(db, "postsBlog", blogId), {
      title: editValues.title,
      docName: editValues.docName,
      category: editValues.category,
      date: editValues.date,
      author: editValues.author,
      linkAuthor: editValues.linkAuthor,
      urlImage: editValues.urlImage,
      text: editValues.text,
    });
    handleClose();
    setOpenAlert(true);
    window.location.reload(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // handleClose Alert
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
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
            <TextField
              autoFocus
              margin="dense"
              id="docName"
              label="DocName (Troque a data no inicio do docName para alterar a ordem de exibição)"
              type="text"
              fullWidth
              defaultValue={postData.docName}
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
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post editado com sucesso.
        </Alert>
      </Snackbar>
    </>
  );
}
