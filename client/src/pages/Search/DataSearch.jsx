import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  TextField,
  Grid,
  Paper,
  // LinearProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { CardArticle, AdBanner } from "../../components";

// import InfiniteScroll from "react-infinite-scroll-component";

export default function DataSearch({ collectionData }) {
  const { t } = useTranslation();
  const [searchField, setSearchField] = useState("");
  const [category, setCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const dataFilteredbyCategory = collectionData.filter((item) =>
    item.category.includes(category)
  );

  const dataFiltered = dataFilteredbyCategory.filter((item) =>
    item.text.includes(searchField)
  );

  // const fetchMoreData = () => {
  //     const newItens = imagesComunCard.concat(imagesComunCardSecondPage);

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={{ xs: "16px", sm: "32px", md: "64px" }}
      p={{ xs: "16px", sm: "32px", md: "64px" }}
    >
      {/* AdBanner */}
      <Grid item>
        <AdBanner />
      </Grid>
      {/* Search Field and Filters */}
      <Grid item>
        <Paper
          sx={{
            p: { xs: "8px 16px", sm: "8px 24px", md: "8px 32px" },
            mx: { xs: "16px", sm: "32px", md: "128px" },
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {/* Search filed */}
            <Grid item xs={12} md={9}>
              <TextField
                fullWidth={true}
                id="busca"
                label={t("Search.textField.input")}
                variant="outlined"
                onChange={handleSearchChange}
              />
            </Grid>
            {/* Filters */}

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">
                  {t("Search.textField.select.label")}
                </InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  value={category}
                  label="Categoria"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value={""}>
                    {t("Search.textField.select.value1")}
                  </MenuItem>
                  <MenuItem value={"Noticias"}>
                    {t("Search.textField.select.value2")}
                  </MenuItem>
                  <MenuItem value={"Artigos"}>
                    {t("Search.textField.select.value3")}
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      {/* Cards Primeiros Artigos + AdBanner container */}
      <Grid container item>
        {/* <InfiniteScroll
          dataLength={dataCardSecondPage.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<LinearProgress sx={{ m: "32px" }} />}
          endMessage={
            <Box sx={{ p: "32px" }}>
              <Typography variant="body1" style={{ textAlign: "center" }}>
                Uau! Você já viu tudo.
              </Typography>
            </Box>
          }
        > */}
        <Grid container spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
          {dataFiltered.map((data, index) => {
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <CardArticle direction="column" postData={[data]} />
              </Grid>
            );
          })}
        </Grid>
        {/* </InfiniteScroll> */}
      </Grid>
    </Grid>
  );
}
