import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  MobileStepper,
  Skeleton,
  Paper,
  Typography,
  Button,
} from "@mui/material";

import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function BannerSlider(props) {
  const [elevation, setElevation] = useState(2);
  if (typeof props.images !== "undefined" && props.images.length > 0) {
    var images = props.images;
  } else {
    var images = [
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
  }
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
      <Box sx={{ flexGrow: 1 }}>
        {/* <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        > */}
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
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
                          xs: "16px 16px 4px 16px",
                          md: "32px 32px 4px 32px",
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
                        <Grid item>
                          <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            sx={{
                              bgcolor: "primary.100",
                              height: "32px",
                            }}
                            nextButton={
                              <Button
                                size="small"
                                variant="text"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                              >
                                {theme.direction === "rtl" ? (
                                  <KeyboardArrowLeft />
                                ) : (
                                  <KeyboardArrowRight />
                                )}
                              </Button>
                            }
                            backButton={
                              <Button
                                size="small"
                                variant="text"
                                onClick={handleBack}
                                disabled={activeStep === 0}
                              >
                                {theme.direction === "rtl" ? (
                                  <KeyboardArrowRight />
                                ) : (
                                  <KeyboardArrowLeft />
                                )}
                              </Button>
                            }
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            ) : null}
          </div>
        ))}
        {/* </AutoPlaySwipeableViews> */}
      </Box>
    </Paper>
  );
}

export default BannerSlider;
