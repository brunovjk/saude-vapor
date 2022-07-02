import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";

import { Link } from "react-router-dom";

function CardArticle(props) {
  const [elevation, setElevation] = useState(3);
  const [minHeight, setMinHeight] = useState("");
  const linkToPost = "/post/" + props.postData[0].docName;

  useEffect(() => {
    if (props.direction === "column") {
      setMinHeight("310px");
    }
  }, [props.direction]);

  return (
    <>
      <Link to={linkToPost}>
        <Card
          elevation={elevation}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: [1, 1, 0.9],
            },
            borderRadius: "18px",
            minHeight: minHeight,
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
                alt={`${props.postData[0].urlImage}`}
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
                  {/* date */}
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
                  {/* category */}
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
                      {props.postData[0].category}
                    </Typography>
                  </Grid>
                  {/* title */}
                  <Grid item>
                    <Typography
                      variant="h3"
                      color="primary.10"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        my: "6px",
                      }}
                    >
                      {props.postData[0].title}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Link>
    </>
  );
}

export default CardArticle;
