import React, { useState } from "react";
import { Typography, Grid, Box, Button } from "@mui/material";
import { CardArticle, AdBanner } from "../../components";
import hero1 from "../../assets/img/hero1.png";
import hero2 from "../../assets/img/hero2.png";

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

export default function Blockchain() {
  const [showCollection, setShowCollection] = useState(false);
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      {/* Hero banner */}
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        bgcolor="secondary.95"
      >
        {/* Copy */}
        <Grid
          container
          item
          xs={12}
          md={4}
          p={{
            xs: "16px 0px 0px 16px",
            sm: "32px 0px 0px 32px",
            md: "64px 0px 0px 64px",
          }}
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h3" color="primary.30">
              Saude Vapor
            </Typography>
          </Grid>
          <Grid item xs={12} mt={{ xs: "16px", sm: "32px", md: "64px" }}>
            <Typography variant="h1" color="text.primary">
              Lorem Ipsum is a dummy text
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </Typography>
          </Grid>
        </Grid>
        {/* Image */}
        <Grid container item xs={12} md={8}>
          <Box component="img" src={hero1} sx={{ width: "100%" }} />
        </Grid>
      </Grid>
      {/* Section 1 */}
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        my={{ xs: "16px", sm: "32x", md: "64px" }}
      >
        {/* Image */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: { xs: "240px", sm: "100%" },
              width: "100%",
              backgroundImage: `url(${hero2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        {/* Copy */}
        <Grid
          container
          item
          xs={12}
          sm={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          p={{ xs: "16px", sm: "32x", md: "48px" }}
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography variant="h1" color="text.primary">
              Lorem Ipsum is a dummy text
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Ad Banner */}
      <Grid item mx={{ xs: "16px", sm: "32x", md: "48px" }}>
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
      {/* Section 2 */}

      <Grid
        container
        item
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        my={{ xs: "16px", sm: "32x", md: "64px" }}
      >
        {!showCollection ? (
          <>
            <Grid item>
              <Typography align="center" variant="h2">
                Please Connect to your Wallet to see the Latest Collections
              </Typography>
            </Grid>
            <Grid
              container
              item
              direction="column"
              justifyContent="center"
              alignItems="center"
              p={{ xs: "8px", sm: "16x", md: "32px" }}
            >
              <Button onClick={() => setShowCollection(true)}>Connect</Button>
            </Grid>
          </>
        ) : (
          <>
            <Typography align="center" variant="h2">
              Latest vjkNFTs minted
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={{ xs: "16px", sm: "32px", md: "48px" }}
              p={{ xs: "16px", sm: "32x", md: "64px" }}
            >
              {images.slice(0, 12).map((imageContent, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <CardArticle direction="column" image={[imageContent]} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
}