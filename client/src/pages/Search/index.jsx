import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  TextField,
  Grid,
  Paper,
  LinearProgress,
  IconButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { CardArticle, AdBanner } from "../../components";
import SearchIcon from "@mui/icons-material/Search";

import InfiniteScroll from "react-infinite-scroll-component";

export default function Search() {
  const [postCollection, setPostCollection] = useState([]);

  const [category, setCategory] = useState("");
  const [imagesComunCard, setImagesComunCard] = useState(
    postCollection.slice(16, 24)
  );

  const imagesComunCardFirstPage = postCollection.slice(0, 12);
  const imagesComunCardSecondPage = postCollection.slice(0, 8);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const fetchMoreData = () => {
    const newItens = imagesComunCard.concat(imagesComunCardSecondPage);

    setTimeout(() => {
      setImagesComunCard(newItens);
    }, 1000);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getPostcollection").then((response) => {
      setPostCollection(response.data);
    });
  }, []);

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
                  onChange={handleChange}
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
      <Grid container item spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
        {imagesComunCardFirstPage.map((imageComunCard, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <CardArticle direction="column" postData={[imageComunCard]} />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <AdBanner
            copyCalls={[
              {
                phrase1: "desconto em",
                phrase2: "Vaporizadores",
              },
              {
                phrase1: "as melhores",
                phrase2: "Sedas de vidro",
              },
              {
                phrase1: "diversos",
                phrase2: "Dichavadores",
              },
              {
                phraseMainCall1: "TUDO ISSO EM",
                phraseMainCall2: "loja.SaudeVapor.com",
              },
              {
                phraseButtonCall1: "ULTIMAS",
                phraseButtonCall2: "OFERTAS",
              },

              {
                img: "https://cdn.awsli.com.br/600x450/824/824608/produto/37752803/e624914227.jpg",
                url: "https://loja.saudevapor.com/",
              },
            ]}
          />
        </Grid>
      </Grid>
      {/* Cards Artigos container */}
      <Grid item>
        <InfiniteScroll
          dataLength={imagesComunCard.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<LinearProgress sx={{ m: "32px" }} />}
        >
          <Grid container spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
            {imagesComunCard.map((imageComunCard, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <CardArticle direction="column" postData={[imageComunCard]} />
                </Grid>
              );
            })}
          </Grid>
        </InfiniteScroll>
      </Grid>
    </Grid>
  );
}
