import React, { useState } from "react";
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
} from "@mui/material";

import Axios from "axios";

export default function Publish() {
  const [img, setImg] = useState();
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleChangeImageUrl = (event) => {
    setImg(event.target.files[0]);
    setFileName(event.target.files[0].name);
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

  const handleClickPublicar = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.postForm(
        `http://localhost:3001/publish/${category}`,
        {
          img: img,
          date: date,
          title: title,
          text: text,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      component="form"
      method="post"
      encType="multipart/form-data"
      onSubmit={handleClickPublicar}
    >
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={4}
      >
        {/* Upload Image */}
        <Grid item xs={12}>
          <Input
            required
            type="file"
            name="img"
            onChange={handleChangeImageUrl}
          />
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
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Button type="submit">Enviar</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
