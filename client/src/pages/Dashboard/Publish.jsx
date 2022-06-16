import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Input,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
  Skeleton,
  CardMedia,
  Snackbar,
  Alert,
} from "@mui/material";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../context/firebase-config";

import Axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Publish() {
  let navigate = useNavigate();
  const [urlImage, setUrlImage] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [stateDisabled, setStateDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [successPost, setSuccessPost] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleChangeImage = (event) => {
    if (event.target.files[0]) {
      setStateDisabled(false);
    }
    setFile(event.target.files[0]);
  };
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    if (event.target.value === "Artigos") {
      setShowDatePicker(true);
    } else {
      setDate(
        `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`
      );
    }
  };
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };
  const handleUploadImage = async () => {
    if (!loading) {
      setLoading(true);
      setStateDisabled(true);

      try {
        if (!file) return;
        const storageRef = ref(storage, `/imagesPost/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (err) => console.log(err),
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) =>
              setUrlImage(url)
            );
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (urlImage) {
      setLoading(false);
      setSuccess(true);
      setStateDisabled(false);

      setTimeout(() => {
        setSuccess(false);
        setStateDisabled(true);
      }, 2000);
    }
  }, [urlImage]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handlePublicar = async (event) => {
    event.preventDefault();

    setLoadingPost(true);

    // Start uploading post
    if (urlImage && date && title && text) {
      try {
        await Axios.post(`http://localhost:3001/publish/${category}`, {
          urlImage: urlImage,
          date: date,
          title: title,
          text: text,
        });

        setLoadingPost(false);
        setSuccessPost(true);

        setTimeout(() => {
          // Post sended, refresh page
          setSuccessPost(false);
          navigate("/");
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    } else {
      setLoadingPost(false);
      setOpen(true);
    }

    // Finish uploading post
  };

  return (
    <Box component="form" onSubmit={handlePublicar}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={4}
      >
        {/* Upload Image */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          {/* Image hold area */}
          <Grid item xs={12}>
            {urlImage ? (
              <CardMedia
                component="img"
                src={urlImage}
                sx={{ width: "100%", height: { xs: "124px", sm: "220px" } }}
              />
            ) : (
              <Skeleton
                variant="rectangular"
                sx={{ width: "100%", height: { xs: "124px", sm: "220px" } }}
              />
            )}
          </Grid>
          {/* Select image button */}
          <Grid item>
            <label htmlFor="upload-button-file">
              <Input
                accept="image/*"
                name="img"
                id="upload-button-file"
                type="file"
                sx={{ display: "none" }}
                onChange={handleChangeImage}
              />
              <Button
                variant="outlined"
                component="span"
                sx={{ minWidth: "200px" }}
              >
                Escolher imagem
              </Button>
            </label>
          </Grid>
          {/* Upload image */}
          <Grid item>
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                variant="outlined"
                color={success ? "success" : "primary"}
                disabled={stateDisabled}
                component="span"
                onClick={handleUploadImage}
                sx={{ minWidth: "200px" }}
              >
                {success ? "Sucesso" : "Enviar imagem"}
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: "primary",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                  value={progress}
                />
              )}
            </Box>
          </Grid>
        </Grid>
        {/* Select Type and Date */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12} sm={6} md={4}>
            <FormControl required fullWidth={true}>
              <InputLabel name="category-select-label">Categoria</InputLabel>
              <Select
                labelId="category-select-label"
                name="category"
                value={category}
                label="Categoria"
                onChange={handleChangeCategory}
              >
                <MenuItem value={"Noticias"}>Noticias</MenuItem>
                <MenuItem value={"Artigos"}>Artigos</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            {showDatePicker && (
              <TextField
                id="date"
                name="date"
                onChange={handleChangeDate}
                required
                type="date"
              />
            )}
          </Grid>
        </Grid>
        {/* Title */}
        <Grid item xs={12}>
          <TextField
            required
            fullWidth={true}
            name="title"
            label="Titulo"
            variant="outlined"
            onChange={handleChangeTitle}
          />
        </Grid>
        {/* Text area */}
        <Grid item xs={12}>
          <TextField
            required
            fullWidth={true}
            name="text"
            label="Texto"
            variant="outlined"
            onChange={handleChangeText}
            multiline
            rows={12}
          />
        </Grid>
        {/* Button */}
        <Grid item xs={12}>
          <Box
            sx={{
              m: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="submit"
              variant={successPost ? "outlined" : "contained"}
              color={successPost ? "success" : "primary"}
              disabled={loadingPost}
              sx={{ minWidth: "180px" }}
            >
              {successPost ? "Post Criado" : "Enviar post"}
            </Button>
            {loadingPost && (
              <CircularProgress
                size={24}
                sx={{
                  color: "primary",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  marginTop: "-12px",
                  marginLeft: "-12px",
                }}
              />
            )}
          </Box>
        </Grid>
      </Grid>
      {/* Alert */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Voce precisa preencher todos os campos para crira um post. Inclusive
          uma imagem.
        </Alert>
      </Snackbar>
    </Box>
  );
}
