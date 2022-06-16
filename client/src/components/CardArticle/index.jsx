import React, { useState } from "react";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

import { NavLink } from "react-router-dom";

function CardArticle(props) {
  const [elevation, setElevation] = useState(3);

  return (
    <>
      <NavLink to="/post">
        <Card
          elevation={elevation}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: [1, 1, 0.9],
            },
            borderRadius: "18px",
          }}
          onMouseEnter={() => setElevation(1)}
          onMouseLeave={() => setElevation(3)}
        >
          <Grid container direction={props.direction}>
            <Grid item xs={5}>
              <CardMedia
                component="img"
                height="100%"
                src={props.postData[0].urlImage}
                alt={props.postData[0].urlImage}
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
                    <Typography
                      variant="underline2"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                      }}
                    >
                      {props.postData[0].date}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="underline2"
                      color="primary"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 1,
                      }}
                    >
                      {props.category}
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
                        my: "6px",
                      }}
                    >
                      {props.postData[0].title}
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
                      {props.postData[0].text}
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
