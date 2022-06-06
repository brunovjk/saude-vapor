import React from "react";
import { BannerSlider, CardArticle, AdBanner } from "../../components";
import { Grid, Box, Paper } from "@mui/material";

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
];

const imagesBannerSlider = images.slice(0, 1);
// const imagesBannerSlider = images.slice(0, 3);
const imagesHorizontalCard = images.slice(3, 7);
const imagesComunCard = images.slice(7, 12);

export default function Home() {
  return (
    <>
      <Grid container spacing={{ xs: "8px", sm: "16px", md: "32px" }}>
        <Grid item xs={12}>
          <BannerSlider images={imagesBannerSlider} />
        </Grid>
        <Grid item>
          <Grid
            container
            spacing={{ xs: "16px", sm: "32px", md: "64px" }}
            px={{ xs: "16px", sm: "32px", md: "64px" }}
          >
            {imagesHorizontalCard.length > 0 ? (
              <>
                {imagesHorizontalCard.map((imageHorizontalCard, index) => {
                  return (
                    <Grid item xs={12} md={6} key={index}>
                      <CardArticle
                        direction={{ xs: "column", sm: "row" }}
                        image={[imageHorizontalCard]}
                      />
                    </Grid>
                  );
                })}
              </>
            ) : (
              <>
                {Array.from(Array(4).keys()).map((index) => {
                  return (
                    <Grid item xs={12} md={6} key={index}>
                      <CardArticle direction={{ xs: "column", sm: "row" }} />
                    </Grid>
                  );
                })}
              </>
            )}
            <Grid item xs={12}>
              <Paper
                variant="outlined"
                sx={{ width: "100%", overflow: "hidden" }}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: "100%",
                    backgroundColor: "secondary.95",
                    height: { xs: "340px", sm: "480px", md: "90px" },
                    alignItems: "center",
                    alignContent: "center",
                  }}
                >
                  {/* <AdBanner /> */}
                </Box>
              </Paper>
            </Grid>

            {imagesComunCard.length > 0 ? (
              <>
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
              </>
            ) : (
              <>
                {Array.from(Array(8).keys()).map((index) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <CardArticle direction="column" />
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
