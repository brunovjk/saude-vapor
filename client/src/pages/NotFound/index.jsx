import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import error404 from "../../assets/img/error404.jpg";

import { Link } from "react-router-dom";

export default function NotFound() {
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
            ERROR 404
          </Typography>
        </Grid>

        <Grid item>
          <Typography variant="body1" textAlign="center">
            A página que voce está procurando foi movida, removida, renomeada ou
            pode nunca ter existido.
          </Typography>
        </Grid>

        <Grid item>
          <Link to="/">
            <Button>Volte a pagina inicial</Button>
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
