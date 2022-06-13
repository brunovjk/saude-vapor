import React, { useState, useEffect } from "react";
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
  const [elevation, setElevation] = useState(3);
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (typeof props.image !== "undefined" && props.image.length > 0) {
      setImage(props.image[0]);
    } else {
      const imagesSkeleton = [
        {
          label: <Skeleton animation="wave" variant="text" width="240px" />,
          date: <Skeleton animation="wave" variant="text" width="56px" />,
          category: <Skeleton animation="wave" variant="text" width="96px" />,
          description: (
            <>
              <Skeleton animation="wave" variant="text" width="280px" />
              <Skeleton animation="wave" variant="text" width="280px" />
              <Skeleton animation="wave" variant="text" width="128px" />
            </>
          ),
          imgPath:
            "https://img.freepik.com/vetores-gratis/equipe-do-armazem-vestindo-uniforme-carregando-a-caixa-de-encomendas-e-verificando-o-produto-do-armazem-entrega-e-armazenamento-logistico-e-transporte-por-caminhao-entrega-e-logistica-da-industria-entrega-comercial_1150-60906.jpg",
        },
      ];
      setImage(imagesSkeleton[0]);
    }
  }, [props.image]);
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
                src={image.imgPath}
                alt={image.label}
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
                    <Typography variant="underline2">{image.date}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="underline2" color="primary">
                      {image.category}
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
                      {image.label}
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
                      {image.description}
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
