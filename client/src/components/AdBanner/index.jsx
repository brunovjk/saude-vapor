import React from "react";
import { Button, Typography, Grid, Box, Paper } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";

import LogoIcon40 from "../../assets/img/logo/LogoIcon32-primaryStrore.svg";

export default function AdBanner(props) {
  return (
    <>
      <Paper variant="outlined" sx={{ width: "100%", overflow: "hidden" }}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            height: { xs: "390px", sm: "480px", md: "90px" },
            width: "100%",
            backgroundColor: "secondary.95",
          }}
        >
          <Grid
            container
            direction={{ xs: "column", md: "row " }}
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
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
