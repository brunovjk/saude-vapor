import React, { useState } from "react";
import {
  Box,
  Grid,
  Skeleton,
  Fab,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import UploadIcon from "@mui/icons-material/Upload";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Axios from "axios";

export default function Publish() {
  const [date, setDate] = useState(null);
  const [category, setCategory] = useState("");
  const [postData, setPostData] = useState();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChangeCategory = (event) => {
    if (event.target.value === "Artigos") {
      setCategory(event.target.value);
      setShowDatePicker(true);
    } else {
      //event.target.value === "Noticias"
      setCategory(event.target.value);
      setShowDatePicker(false);
      setPostData((prevValue) => ({
        ...prevValue,
        ["date"]: `${new Date()}`,
      }));
    }
  };

  const handleChangeDate = (event) => {
    setDate(event);
    setPostData((prevValue) => ({
      ...prevValue,
      ["date"]: event,
    }));
  };

  const handleChangePostData = (event) => {
    setPostData((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClickPublicar = () => {
    Axios.post(`http://localhost:3001/publish/${category}`, {
      img: postData.img,
      date: postData.date,
      title: postData.title,
      text: postData.text,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={3}
      >
        {/* Banner Image */}
        <Grid item xs={12}>
          <Box width="100%" height="118px">
            <Skeleton variant="rectangular" width="100%" height="100%" />
          </Box>
        </Grid>
        {/* Upload Image */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
        >
          <Grid item>
            <Fab size="small" color="primary" aria-label="UploadIcon">
              <UploadIcon fontSize="small" color="secondary" />
            </Fab>
          </Grid>
          <Grid item>
            <Typography variant="body2">Escolher arquivo...</Typography>
          </Grid>
          <Grid item>
            <Button>Enviar</Button>
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
            <FormControl fullWidth={true}>
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
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Data de publicação"
                  id="date"
                  name="date"
                  value={date}
                  onChange={handleChangeDate}
                  renderInput={(params) => (
                    <TextField fullWidth={true} {...params} />
                  )}
                />
              </LocalizationProvider>
            )}
          </Grid>
        </Grid>
        {/* img */}
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            name="img"
            label="Imagem"
            variant="outlined"
            onChange={handleChangePostData}
          />
        </Grid>
        {/* Title */}
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            name="title"
            label="Titulo"
            variant="outlined"
            onChange={handleChangePostData}
          />
        </Grid>
        {/* Text area */}
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            name="text"
            label="Texto"
            variant="outlined"
            onChange={handleChangePostData}
            multiline
            rows={12}
          />
        </Grid>
        {/* Button */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button onClick={handleClickPublicar}>Enviar</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
