import React, { useState } from "react";
import {
  TextField,
  Grid,
  Paper,
  // LinearProgress,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { CardArticle, AdBanner } from "../../components";
import SearchIcon from "@mui/icons-material/Search";

// import InfiniteScroll from "react-infinite-scroll-component";

export default function DataSearch({ collectionData }) {
  const [searchField, setSearchField] = useState("");
  const [searchParam] = useState(["title", "postText"]);
  const [category, setCategory] = useState("");

  const handleSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const postLists = collectionData.filter((postItem) => {
    return searchParam.some((newPostItem) => {
      return (
        postItem[newPostItem]
          .toString()
          .toLowerCase()
          .indexOf(searchField.toLowerCase()) > -1
      );
    });
  });

  // const fetchMoreData = () => {
  //     const newItens = imagesComunCard.concat(imagesComunCardSecondPage);

  //     setTimeout(() => {
  //     }, 1000);
  // };

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
        <AdBanner
          copyCalls={[
            {
              phrase1: "Controle",
              phrase2: "sua brisa",
            },
            {
              phrase1: "Reduza",
              phrase2: "os danos",
            },
            {
              phrase1: "Economize",
              phrase2: "sua erva",
            },
            {
              phraseMainCall1: "GOSTOU",
              phraseMainCall2: "DA IDEIA?",
            },
            {
              phraseButtonCall1: "ADQUIRA JÁ",
              phraseButtonCall2: "SEU VAPORIZADOR",
            },
            {
              img: "https://i0.wp.com/www.smokebuddies.com.br/wp-content/uploads/2017/08/Conheca-5-modelos-de-Vaporizadores-que-cabem-literalmente-no-bolso.jpeg?fit=900%2C506&ssl=1",
              url: "https://loja.saudevapor.com/",
            },
          ]}
        />
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
                label="Busque..."
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
                onChange={handleSearchChange}
              />
            </Grid>
            {/* Filters */}

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Categoria</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  value={category}
                  label="Categoria"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value={10}>Todos categorias</MenuItem>
                  <MenuItem value={20}>Noticias</MenuItem>
                  <MenuItem value={30}>Artigos</MenuItem>
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
          {postLists.map((data, index) => {
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
