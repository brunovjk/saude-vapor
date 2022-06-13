import React, { useState, useEffect } from "react";
import { Box, Grid, Skeleton, Paper, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

import { NavLink } from "react-router-dom";

function BannerSlider(props) {
  const [elevation, setElevation] = useState(3);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (typeof props.images !== "undefined" && props.images.length > 0) {
      setImages(props.images);
    } else {
      const imagesSkeleton = [
        {
          title: <Skeleton animation="wave" variant="text" />,
          date: <Skeleton animation="wave" variant="text" />,
          text: (
            <>
              <Skeleton animation="wave" variant="text" />
              <Skeleton animation="wave" variant="text" />
            </>
          ),
          imgPath:
            "https://blog.inteligov.com.br/wp-content/uploads/2020/04/seguranca-da-informacao-1013x675.jpeg",
        },
        {
          title: <Skeleton animation="wave" variant="text" />,
          date: <Skeleton animation="wave" variant="text" />,
          text: (
            <>
              <Skeleton animation="wave" variant="text" />
              <Skeleton animation="wave" variant="text" />
            </>
          ),
          imgPath:
            "https://www.biti9.com.br/wp-content/uploads/2021/06/Gestao-da-informacao-1080x675.jpg",
        },
      ];
      setImages(imagesSkeleton);
    }
  }, [props.images]);

  return (
    <Paper
      elevation={elevation}
      sx={{
        overflow: "hidden",
        borderRadius: "0px",
      }}
      onMouseEnter={() => setElevation(1)}
      onMouseLeave={() => setElevation(3)}
    >
      <Box sx={{ width: "100%" }}>
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {images.map((step, index) => (
            <SwiperSlide key={index}>
              <NavLink to="/post">
                <Box
                  component="div"
                  sx={{
                    height: "70vh",
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                    cursor: "pointer",
                    backgroundImage: `url(${step.imgPath})`,

                    "&:hover": {
                      opacity: [1, 1, 0.95],
                    },
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="stretch"
                    sx={{ height: "100%", width: "100%" }}
                  >
                    <Grid item>
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          p: {
                            xs: "16px",
                            md: "32px",
                          },
                          backgroundColor: "primary.100",
                          opacity: [1, 1, 0.8],
                        }}
                      >
                        <Grid
                          container
                          direction="column"
                          justifyContent="center"
                          alignItems="stretch"
                        >
                          <Grid item>
                            <Typography
                              variant="headline"
                              color="primary.10"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: { xs: 2, md: 1 },
                                px: { xs: "0px", md: "36px" },
                              }}
                            >
                              {step.title}
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              variant="underline2"
                              color="primary.30"
                              sx={{
                                px: { xs: "0px", md: "36px" },
                              }}
                            >
                              {step.date}
                            </Typography>
                          </Grid>
                          <Grid
                            item
                            sx={{
                              mt: "18px",
                              px: { xs: "0px", sm: "36px" },
                            }}
                          >
                            <Typography
                              variant="h3"
                              color="text.secondary "
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: { xs: 3, sm: 2 },
                                letterSpacing: -0.8,
                                fontWeight: 400,
                                mb: { xs: "24px", sm: "24px", md: "8px" },
                              }}
                            >
                              {step.text}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Paper>
  );
}

export default BannerSlider;
