import React, { useState } from "react";
import {
  Skeleton,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

import { NavLink } from "react-router-dom";

function CardArticle(props) {
  const [elevation, setElevation] = useState(2);
  if (typeof props.image !== "undefined" && props.image.length > 0) {
    var image = props.image;
  } else {
    var image = [
      {
        label: <Skeleton animation="wave" variant="text" />,
        date: <Skeleton animation="wave" variant="text" />,
        category: <Skeleton animation="wave" variant="text" />,
        description: (
          <>
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
            <Skeleton animation="wave" variant="text" />
          </>
        ),
        imgPath:
          "https://saudevapor.com/static/media/folhas.61bace99e376301ebfdb.png",
      },
    ];
  }
  return (
    <>
      <NavLink to="/styleguide">
        <Card
          elevation={elevation}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: [1, 1, 0.9],
            },
            borderRadius: "18px",
          }}
          onMouseEnter={() => setElevation(0)}
          onMouseLeave={() => setElevation(2)}
        >
          <Grid container direction={props.direction}>
            <Grid item xs={5}>
              <CardMedia
                component="img"
                height="100%"
                src={image[0].imgPath}
                alt={image[0].label}
              />
            </Grid>
            <Grid item xs={7}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="flex-start"
                >
                  <Grid item>
                    <Typography variant="underline2">
                      {image[0].date}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="underline2" color="primary">
                      {image[0].category}
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      variant="h3"
                      color="primary.10"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                        my: "8px",
                      }}
                    >
                      {image[0].label}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="underline1"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                      }}
                    >
                      {image[0].description}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </NavLink>
    </>
  );
}

export default CardArticle;
