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

import EditorContainerComp from "../../components/EditorContainerComp";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../context/firebase-config";

import Axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Publish() {
  let months = [
    "Mes",
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez",
  ];

  let navigate = useNavigate();
  const [urlImage, setUrlImage] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [docName, setDocName] = useState("");
  const [author, setAuthor] = useState("");
  const [linkAuthor, setLinkAuthor] = useState("NULL");
  const [text, setText] = useState("");

  const [file, setFile] = useState();
  const [dateToId, setDateToId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [stateDisabled, setStateDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loadingPost, setLoadingPost] = useState(false);
  const [successPost, setSuccessPost] = useState(false);
  const [open, setOpen] = useState(false);

  const handleChangeImage = (event) => {
    if (event.target.files[0]) {
      setStateDisabled(false);
    }
    setFile(event.target.files[0]);
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

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    if (event.target.value === "Artigos") {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
      setDateToId(
        `${new Date().getFullYear()} ${new Date().getMonth()} ${new Date().getDate()}`
      );
      setDate(
        `${new Date().getDate()} 
        ${months[new Date().getMonth() + 1]} 
        ${new Date().getFullYear()}`
      );
    }
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDate = (event) => {
    setDateToId(event.target.value);
    if (event.target.value.slice(5, 6) === "0") {
      const dateFormated = `${event.target.value.slice(8, 10)} ${
        months[event.target.value.slice(6, 7)]
      } ${event.target.value.slice(0, 4)} `;
      setDate(dateFormated);
    } else {
      const dateFormated = `${event.target.value.slice(8, 10)} ${
        months[event.target.value.slice(5, 7)]
      } ${event.target.value.slice(0, 4)} `;
      setDate(dateFormated);
    }
  };
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleChangeLinkAuthor = (event) => {
    setLinkAuthor(event.target.value);
  };

  // handleClose Alert
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  //Handle docName
  useEffect(() => {
    if (title && dateToId) {
      try {
        let letters = "abcdefghijklmnopqrstuvwxyz";
        let blogTitle = title.split(" ").join("-");
        let id = "";
        for (let i = 0; i < 4; i++) {
          id += letters[Math.floor(Math.random() * letters.length)];
        }
        setDocName(`${dateToId}-${blogTitle}-${id}`);
      } catch (error) {
        console.log(error);
      }
    }
  }, [title, dateToId]);

  // Handling success buttom
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

  const handlePublish = async (event) => {
    event.preventDefault();
    setLoadingPost(true);

    // Start uploading post
    if (
      docName &&
      urlImage &&
      category &&
      title &&
      date &&
      author &&
      linkAuthor &&
      text
    ) {
      try {
        await Axios.post(`http://localhost:3001/publish/${category}`, {
          docName: docName,
          urlImage: urlImage,
          category: category,
          title: title,
          date: date,
          author: author,
          linkAuthor: linkAuthor,
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
    <Box component="form" onSubmit={handlePublish}>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {/* Upload Image */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          pb={2}
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
        {/* Select Category and Date */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {/* Handle category */}
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
          {/* Handle date */}
          <Grid item xs={12} sm={6} md={4}>
            {showDatePicker && (
              <TextField
                required
                fullWidth={true}
                id="date"
                name="date"
                onChange={handleChangeDate}
                type="date"
              />
            )}
          </Grid>
        </Grid>
        {/* Select Author and LinkAuthor */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {/* Handle author */}
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth={true}
              name="author"
              label="Autor"
              variant="outlined"
              onChange={handleChangeAuthor}
            />
          </Grid>
          {/* Handle link author */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth={true}
              type="url"
              name="link-author"
              label="Link de referência ao Autor"
              variant="outlined"
              onChange={handleChangeLinkAuthor}
            />
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
          <EditorContainerComp setText={setText} />
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
          Você precisa preencher todos os campos para crir um post. Inclusive
          uma imagem.
        </Alert>
      </Snackbar>
    </Box>
  );
}
