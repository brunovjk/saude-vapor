import React from "react";
import {
  BannerSlider,
  CardArticle,
  AdBanner,
  FABSocialMedia,
} from "../../components";
import {
  Container,
  Grid,
  LinearProgress,
  Typography,
  Box,
} from "@mui/material";

import InfiniteScroll from "react-infinite-scroll-component";

export default function DataHome({
  dataBannerSlider,
  dataHorizontalCard,
  dataCardFirstPage,
  dataCardSecondPage,
  fetchMoreData,
  hasMore,
}) {
  return (
    <>
      {/* FABSocialMedia */}
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
        sx={{
          widht: "0px",
          height: "0px",
        }}
      >
        <FABSocialMedia mt="10vh" mr="2vw" direction="column" />
      </Grid>
      {/* Banners container */}
      <BannerSlider postData={dataBannerSlider} />
      {/* Body */}
      <Container sx={{ my: { xs: "16px", sm: "32px", md: "48px" } }}>
        <Grid container spacing={{ xs: "8px", sm: "16px", md: "32px" }}>
          {/* Cards Noticias container */}
          <Grid container item spacing={{ xs: "16px", sm: "32px", md: "64px" }}>
            {dataHorizontalCard.map((dataHorizontalCard, index) => {
              return (
                <Grid item xs={12} md={6} key={index}>
                  <CardArticle
                    direction={{ xs: "column", sm: "row" }}
                    postData={[dataHorizontalCard]}
                  />
                </Grid>
              );
            })}
          </Grid>
          {/* AdBanner container */}
          <Grid container item>
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
          {/* Cards Primeiros Artigos + AdBanner container */}
          <Grid container item spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
            {dataCardFirstPage.map((dataCardSecondPage, index) => {
              return (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <CardArticle
                    direction="column"
                    postData={[dataCardSecondPage]}
                  />
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
          <Grid container item>
            <InfiniteScroll
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
            >
              <Grid container spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
                {dataCardSecondPage.map((singleDataComunCard, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <CardArticle
                        direction="column"
                        postData={[singleDataComunCard]}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </InfiniteScroll>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
