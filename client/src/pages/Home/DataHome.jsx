import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
import { Link } from "react-router-dom";

export default function DataHome({
  noticiaQueryData,
  artigoQueryData,
  infinityScrollNumber,
  setInfinityScrollNumber,
}) {
  const { t } = useTranslation();
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    setInfinityScrollNumber(infinityScrollNumber + 12);
  };

  useEffect(() => {
    try {
      if (infinityScrollNumber > 35) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [infinityScrollNumber]);

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
      <BannerSlider postData={noticiaQueryData.slice(0, 3)} />
      {/* Body */}
      <Container sx={{ my: { xs: "16px", sm: "32px", md: "48px" } }}>
        <Grid container spacing={{ xs: "8px", sm: "16px", md: "32px" }}>
          {/* Cards Noticias container */}
          <Grid container item spacing={{ xs: "16px", sm: "32px", md: "64px" }}>
            {noticiaQueryData.slice(3, 7).map((dataHorizontalCard, index) => {
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
            <AdBanner />
          </Grid>

          {/* Cards Artigos container */}
          <Grid container item>
            <InfiniteScroll
              dataLength={artigoQueryData.length}
              next={fetchMoreData}
              hasMore={hasMore}
              loader={<LinearProgress sx={{ m: "32px" }} />}
              endMessage={
                <Box sx={{ p: "32px" }}>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    {t("Home.infinityLoading.text")}
                    <Link to="/busca" color="primary">
                      <Typography variant="h3" color="primary">
                        {t("Home.infinityLoading.button")}
                      </Typography>
                    </Link>
                  </Typography>
                </Box>
              }
            >
              <Grid container spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
                {artigoQueryData.map((singleDataComunCard, index) => {
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
