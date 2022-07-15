import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Grid, Button, Box } from "@mui/material";
import error404 from "../../assets/img/error404.jpg";

import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Grid
        container
        item
        xs={12}
        sm={6}
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={5}
        sx={{
          px: { xs: "16px", sm: "32px", md: "64px" },
          py: { xs: "32px", sm: "64px", md: "96px" },
        }}
      >
        <Grid item>
          <Typography variant="h1" color="primary">
            {t("NotFound.tilte")}
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1" textAlign="center">
            {t("NotFound.text")}
          </Typography>
        </Grid>

        <Grid item>
          <Link to="/">
            <Button>{t("NotFound.button")}</Button>
          </Link>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={6}
        sx={{ height: { xs: "50vh", md: "100vh" }, width: "100%", mb: "-2rem" }}
      >
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundImage: `url(${error404})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </Grid>
  );
}
