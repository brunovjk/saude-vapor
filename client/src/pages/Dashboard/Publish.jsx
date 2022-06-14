import React, { useState } from "react";
import {
  Box,
  Grid,
  Skeleton,
  Input,
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Axios from "axios";

export default function Publish() {
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
  const [category, setCategory] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleChangeImageUrl = (event) => {
    setFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    if (event.target.value === "Artigos") {
      setShowDatePicker(true);
    } else {
      setDate(new Date());
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

  const handleClickPublicar = async () => {
    try {
      const res = await Axios.post(
        `http://localhost:3001/publish/${category}`,
        {
          file: file,
          fileName: fileName,
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
        <Grid item xs={12}>
          <Input type="file" onChange={handleChangeImageUrl} />
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
        {/* Title */}
        <Grid item xs={12}>
          <TextField
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
          <Button onClick={handleClickPublicar}>Enviar</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
