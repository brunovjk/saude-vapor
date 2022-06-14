import React, { useState, useContext } from "react";
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
  CircularProgress,
} from "@mui/material";

import InfiniteScroll from "react-infinite-scroll-component";
import { PostdataContext } from "../../context/PostdataContext";

export default function Home() {
  const [hasMore, setHasMore] = useState(true);
  const [totalItens, setTotalItens] = useState(16);

  const [displayLoading, setDisplayLoading] = useState("block");
  const [displayContent, setDisplayContent] = useState("none");

  const { articleCollection, newsCollection } = useContext(PostdataContext);

  const dataBannerSlider = newsCollection.slice(0, 3);
  const dataHorizontalCard = newsCollection.slice(3, 7);

  const dataCardFirstPage = articleCollection.slice(0, 12);

  const [dataCardSecondPage, setDataCardSecondPage] = useState(
    articleCollection.slice(12, 16)
  );

  const fetchMoreData = () => {
    const dataToFecth = articleCollection.slice(totalItens, totalItens + 8);
    setTotalItens(totalItens + 8);

    const newItens = dataCardSecondPage.concat(dataToFecth);

    if (dataToFecth.length === 0) {
      setHasMore(false);
    }

    setTimeout(() => {
      setDataCardSecondPage(newItens);
    }, 1000);
  };

  setTimeout(() => {
    if (articleCollection.length > 0 || newsCollection.length > 0) {
      setDisplayLoading("none");
      setDisplayContent("block");
    }
  }, 1000);

  return (
    <>
      <Box sx={{ display: displayLoading }}>
        <Box
          sx={{
            width: "100vw",
            height: "100vh",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="primary" />
        </Box>
      </Box>

      <Box sx={{ display: displayContent }}>
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
            <Grid
              container
              item
              spacing={{ xs: "16px", sm: "32px", md: "64px" }}
            >
              {dataHorizontalCard.map((dataHorizontalCard, index) => {
                return (
                  <Grid item xs={12} md={6} key={index}>
                    <CardArticle
                      direction={{ xs: "column", sm: "row" }}
                      postData={[dataHorizontalCard]}
                      category="Noticia"
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
            <Grid
              container
              item
              spacing={{ xs: "16px", sm: "32px", md: "48px" }}
            >
              {dataCardFirstPage.map((dataCardSecondPage, index) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <CardArticle
                      direction="column"
                      postData={[dataCardSecondPage]}
                      category="Artigo"
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
                <Grid
                  container
                  spacing={{ xs: "16px", sm: "32px", md: "48px" }}
                >
                  {dataCardSecondPage.map((singleDataComunCard, index) => {
                    return (
                      <Grid item xs={12} sm={6} md={3} key={index}>
                        <CardArticle
                          direction="column"
                          postData={[singleDataComunCard]}
                          category="Artigo"
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </InfiniteScroll>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
