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

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import UploadIcon from "@mui/icons-material/Upload";

export default function Publish() {
  const [category, setCategory] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(null);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    if (event.target.value === "Artigos") {
      setShowDatePicker(true);
    } else {
      setShowDatePicker(false);
    }
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
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
              <InputLabel id="category-select-label">Categoria</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={category}
                label="Categoria"
                onChange={handleCategoryChange}
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
                  value={date}
                  onChange={handleDateChange}
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
            id="title-field"
            label="Titulo"
            variant="outlined"
          />
        </Grid>
        {/* Text area */}
        <Grid item xs={12}>
          <TextField
            fullWidth={true}
            id="text-area-field"
            label="Texto"
            variant="outlined"
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
          <Button>Enviar</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
