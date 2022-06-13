import React, { useState, useEffect } from "react";
import { Button, Typography, Grid, Box, Paper } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

import LogoIcon40 from "../../assets/img/logo/LogoIcon32-primaryStrore.svg";

export default function AdBanner(props) {
  const [adWidth, setAdWidth] = useState("100%");
  const [adHeight, setAdHeight] = useState("90px");
  const [adSpacing, setAdSpacing] = useState(2);
  const [adDirection, setAdDirection] = useState("row");

  useEffect(() => {
    if (props.vertical) {
      setAdWidth("280px");
      setAdHeight("480px");
      setAdSpacing(5);
      setAdDirection("column");
    }
  }, [props.vertical]);

  return (
    <>
      <Paper
        variant="outlined"
        sx={{ width: { xs: "100%", md: adWidth }, overflow: "hidden" }}
      >
        <Box
          display="flex"
          alignItems={{ xs: "flex-start", md: "center" }}
          justifyContent="center"
          sx={{
            height: { xs: "280px", sm: "360px", md: adHeight },
            width: { xs: "100%", md: adWidth },
            pt: { xs: "16px", sm: "32px", md: "0" },
            backgroundColor: "secondary.95",
          }}
        >
          <Grid
            container
            direction={{ xs: "column", md: adDirection }}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={{ xs: 2, md: adSpacing }}
          >
            {/* Logo Call reponsive */}
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                sx={{ width: { xs: "150px", sm: "280px" } }}
              >
                {/* logo */}
                <Grid itemxs={2}>
                  <Box
                    component="img"
                    src={LogoIcon40}
                    sx={{ width: "32px", height: "32px" }}
                  />
                </Grid>
                {/* carosel */}
                <Grid item xs={8}>
                  <Box>
                    <Swiper
                      slidesPerView={1}
                      centeredSlides={true}
                      autoplay={{
                        delay: 1000,
                        disableOnInteraction: true,
                      }}
                      modules={[Autoplay]}
                      className="mySwiper"
                    >
                      {props.copyCalls.slice(0, 3).map((copyCall, index) => (
                        <SwiperSlide key={index}>
                          <Box component="div">
                            <Typography variant="h2" color="primary.store">
                              {copyCall.phrase1}
                            </Typography>
                            <Typography variant="h2">
                              {copyCall.phrase2}
                            </Typography>
                          </Box>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* call */}
            <Grid item>
              <Box display="grid" alignItems="center" justifyContent="center">
                <Typography variant="h2">
                  {props.copyCalls[3].phraseMainCall1}
                </Typography>
                <Typography variant="h2" color="primary.store">
                  {props.copyCalls[3].phraseMainCall2}
                </Typography>
              </Box>
            </Grid>
            {/* button */}
            <Grid item>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Button
                  target="_blank"
                  href={props.copyCalls[5].url}
                  sx={{ p: "28px" }}
                  align="center"
                  color="store"
                >
                  {props.copyCalls[4].phraseButtonCall1} <br />
                  {props.copyCalls[4].phraseButtonCall2}
                </Button>
              </Box>
            </Grid>
            {/* img */}
            <Grid item>
              <Box
                component="img"
                src={props.copyCalls[5].img}
                sx={{ width: "225px" }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
