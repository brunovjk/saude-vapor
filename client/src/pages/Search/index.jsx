import React, { useState } from "react";
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

const images = [
  {
    label:
      "1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/saude-vapor-site.appspot.com/o/files%2F33205794.jpg?alt=media&token=22e3df9e-2f92-4108-ab58-7db562676ad4",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "2San Francisco – Oakland Bay Bridge, United States",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "3Bird",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "4Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "5Goč, Serbia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label:
      "6Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/saude-vapor-site.appspot.com/o/files%2F33205794.jpg?alt=media&token=22e3df9e-2f92-4108-ab58-7db562676ad4",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "7San Francisco – Oakland Bay Bridge, United States",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "8Bird",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "9Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "10Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "11Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "12Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "13Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "14Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "15Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "16Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "17Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "18Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "19Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "20Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "21Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "22Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "23Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
  {
    label: "24Bali, Indonesia",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
    date: "10 Mar 2022",
    category: "Noticia",
  },
];
const imagesComunCardFirstPage = images.slice(0, 12);
const imagesComunCardSecondPage = images.slice(0, 8);

export default function Search() {
  const [category, setCategory] = useState("");
  const [imagesComunCard, setImagesComunCard] = useState(images.slice(16, 24));

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const fetchMoreData = () => {
    const newItens = imagesComunCard.concat(imagesComunCardSecondPage);

    setTimeout(() => {
      setImagesComunCard(newItens);
    }, 1000);
  };

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
      <Grid item>
        {imagesComunCardFirstPage.length > 0 ? (
          <>
            <Grid container spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
              {imagesComunCardFirstPage.map((imageComunCard, index) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <CardArticle direction="column" image={[imageComunCard]} />
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
          </>
        ) : (
          <>
            <Grid container spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
              {Array.from(Array(8).keys()).map((index) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <CardArticle direction="column" />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Grid>
      {/* Cards Artigos container */}
      <Grid item>
        {imagesComunCard.length > 0 ? (
          <>
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
                      <CardArticle
                        direction="column"
                        image={[imageComunCard]}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </InfiniteScroll>
          </>
        ) : (
          <>
            <Grid container spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
              {Array.from(Array(8).keys()).map((index) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <CardArticle direction="column" />
                  </Grid>
                );
              })}
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
}
