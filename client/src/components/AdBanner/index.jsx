import React from "react";
import { Button, Typography, Grid, Box } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/bundle";

import LogoIcon40 from "../../assets/img/logo/LogoIcon32-primaryStrore.svg";

export default function AdBanner() {
  return (
    <>
      <Grid
        container
        direction={{ xs: "column", md: "row " }}
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Box
                component="img"
                src={LogoIcon40}
                sx={{ width: "32px", height: "32px" }}
              ></Box>
            </Grid>
            <Grid item>
              <Swiper
                slidesPerView={1}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: true,
                }}
                modules={[Autoplay]}
              >
                <SwiperSlide>
                  <Typography variant="h2" color="primary.store">
                    Controle
                  </Typography>
                  <Typography variant="h2">sua brisa</Typography>
                </SwiperSlide>

                <SwiperSlide>
                  <Typography variant="h2" color="primary.store">
                    Reduza
                  </Typography>
                  <Typography variant="h2">os danos</Typography>
                </SwiperSlide>
              </Swiper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant="h2">GOSTOU</Typography>
          <Typography variant="h2" color="primary.store">
            DA IDEIA?
          </Typography>
        </Grid>
        <Grid item>
          <Button sx={{ p: "28px" }} color="store">
            ADQUIRA JÁ <br /> SEU VAPORIZADOR
          </Button>
        </Grid>
        <Grid item>
          <Box
            component="img"
            src="https://i0.wp.com/www.smokebuddies.com.br/wp-content/uploads/2017/08/Conheca-5-modelos-de-Vaporizadores-que-cabem-literalmente-no-bolso.jpeg?fit=900%2C506&ssl=1"
            sx={{ width: "225px", height: "126px" }}
          ></Box>
        </Grid>
      </Grid>
    </>
  );
}
