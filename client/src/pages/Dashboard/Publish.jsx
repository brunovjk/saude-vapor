import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
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
} from "@mui/material";

import { EditorContainerComp, AlertComponent } from "../../components";
import { Context } from "../../context/Context";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../context/firebase-config";
import { doc, setDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

export default function Publish() {
  const { t } = useTranslation();
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
  let monthsNumber = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "10",
  ];

  let navigate = useNavigate();
  const { selectedLanguage } = useContext(Context);

  const [urlImage, setUrlImage] = useState("");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [lang, setLang] = useState(selectedLanguage);
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
  const [alertComponent, setAlertComponent] = useState({
    openAlert: false,
    severity: "success",
    message: "",
  });
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
        const storageRef = ref(storage, `/images/Blog/postImages/${file.name}`);
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
    if (event.target.value === "articles") {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
      setDateToId(
        `${new Date().getFullYear()}-${
          monthsNumber[new Date().getMonth()]
        }-${new Date().getDate()}`
      );
      setDate(
        `${new Date().getDate()} 
        ${months[new Date().getMonth()]} 
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
        months[event.target.value.slice(6, 7) - 1]
      } ${event.target.value.slice(0, 4)} `;
      setDate(dateFormated);
    } else {
      const dateFormated = `${event.target.value.slice(8, 10)} ${
        months[event.target.value.slice(5, 7)]
      } ${event.target.value.slice(0, 4)} `;
      setDate(dateFormated);
    }
  };
  const handleChangeLang = (event) => {
    setLang(event.target.value);
  };
  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleChangeLinkAuthor = (event) => {
    setLinkAuthor(event.target.value);
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

  // Handling upload success buttom
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
      lang &&
      author &&
      linkAuthor &&
      text
    ) {
      const collectionRefLanguage = `postsBlog/${lang}/posts`;
      const postsCollectionRef = doc(db, collectionRefLanguage, `${docName}`);

      try {
        await setDoc(postsCollectionRef, {
          docName,
          urlImage,
          category,
          title,
          date,
          lang,
          author,
          linkAuthor,
          text,
        });

        setLoadingPost(false);
        setSuccessPost(true);

        setTimeout(() => {
          // Post sended, refresh page
          setSuccessPost(false);
          navigate("/");
        }, 2000);
      } catch (err) {
        setAlertComponent({
          openAlert: true,
          severity: "error",
          message: t("Dashboard.publish.alert.alert1"),
        });
      }
    } else {
      setLoadingPost(false);
      setAlertComponent({
        openAlert: true,
        severity: "error",
        message: t("Dashboard.publish.alert.alert2"),
      });
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
                {t("Dashboard.publish.button.pickImg")}
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
                {success
                  ? t("Dashboard.publish.button.uploadImg.success")
                  : t("Dashboard.publish.button.uploadImg.upload")}
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
          <Grid item xs={12} sm={4} md={3}>
            <FormControl required fullWidth={true}>
              <InputLabel name="category-select-label">
                {t("Dashboard.publish.textField.category.label")}
              </InputLabel>
              <Select
                labelId="category-select-label"
                name="category"
                value={category}
                label="Categoria"
                onChange={handleChangeCategory}
              >
                <MenuItem value={"news"}>
                  {t("Dashboard.publish.textField.category.value1")}
                </MenuItem>
                <MenuItem value={"articles"}>
                  {t("Dashboard.publish.textField.category.value2")}
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Handle date */}
          <Grid item xs={12} sm={4} md={3}>
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
          {/* Handle lang */}
          <Grid item xs={12} sm={4} md={3}>
            <FormControl required fullWidth={true}>
              <InputLabel name="lang-select-label">
                {t("Dashboard.publish.textField.languague.label")}
              </InputLabel>
              <Select
                labelId="lang-select-label"
                name="lang"
                value={lang}
                label="Idioma"
                onChange={handleChangeLang}
              >
                <MenuItem value={"en"}>
                  {t("Dashboard.publish.textField.languague.value1")}
                </MenuItem>
                <MenuItem value={"pt-BR"}>
                  {t("Dashboard.publish.textField.languague.value2")}
                </MenuItem>
              </Select>
            </FormControl>
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
                label={t("Dashboard.publish.textField.author")}
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
                label={t("Dashboard.publish.textField.linkAuthor")}
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
              label={t("Dashboard.publish.textField.title")}
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
                {successPost
                  ? t("Dashboard.publish.button.post.success")
                  : t("Dashboard.publish.button.post.post")}
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
        <AlertComponent
          alertComponent={alertComponent}
          setAlertComponent={setAlertComponent}
        />
      </Grid>
    </Box>
  );
}
