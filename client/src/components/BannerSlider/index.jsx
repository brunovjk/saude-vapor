import React, { useState, useEffect } from "react";
import { Box, Grid, Skeleton, Paper, Typography } from "@mui/material";

function BannerSlider(props) {
  const [elevation, setElevation] = useState(2);
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (typeof props.images !== "undefined" && props.images.length > 0) {
      setImages(props.images);
    } else {
      const imagesSkeleton = [
        {
          label: <Skeleton animation="wave" variant="text" />,
          description: (
            <>
              <Skeleton animation="wave" variant="text" />
              <Skeleton animation="wave" variant="text" />
            </>
          ),
          imgPath:
            "https://saudevapor.com/static/media/folhas.61bace99e376301ebfdb.png",
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
      onMouseEnter={() => setElevation(0)}
      onMouseLeave={() => setElevation(2)}
    >
      <Box>
        {images.map((step, index) => (
          <Box
            key={index}
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
                          WebkitLineClamp: 2,
                          px: { xs: "0px", md: "36px" },
                        }}
                      >
                        {step.label}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      sx={{
                        mt: "18px",
                        px: { xs: "12px", sm: "36px" },
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
                        }}
                      >
                        {step.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default BannerSlider;
