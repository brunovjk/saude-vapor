import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { AdBanner } from "../../components";
import hero1 from "../../assets/img/hero1.png";
import hero2 from "../../assets/img/hero2.png";
import hero3 from "../../assets/img/hero3.png";

export default function About() {
  return (
    <Container maxWidth="xl">
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {/* Hero banner */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          bgcolor="secondary.95"
        >
          {/* Copy */}
          <Grid
            container
            item
            xs={12}
            md={4}
            py={{ xs: "16px", sm: "32px", md: "64px" }}
            spacing={2}
          >
            <Grid item xs={12}>
              <Typography variant="h3" color="primary.30">
                Saude Vapor
              </Typography>
            </Grid>
            <Grid item xs={12} mt={{ xs: "16px", sm: "32px", md: "64px" }}>
              <Typography variant="h1" color="text.primary">
                Lorem Ipsum is a dummy text
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Typography>
            </Grid>
          </Grid>
          {/* Image */}
          <Grid container item xs={12} md={8}>
            <Box component="img" src={hero1} sx={{ width: "100%" }} />
          </Grid>
        </Grid>
        {/* Section 1 */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          my={{ xs: "16px", sm: "32x", md: "64px" }}
        >
          {/* Image */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: { xs: "240px", sm: "100%" },
                width: "100%",
                backgroundImage: `url(${hero2})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          {/* Copy */}
          <Grid
            container
            item
            xs={12}
            sm={6}
            direction="row"
            justifyContent="center"
            alignItems="center"
            p={{ xs: "16px", sm: "32x", md: "48px" }}
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h1" color="text.primary">
                Lorem Ipsum is a dummy text
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* Section 2 */}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          my={{ xs: "16px", sm: "32x", md: "64px" }}
          pb={{ xs: "16px", sm: "32x", md: "64px" }}
        >
          {/* Copy */}
          <Grid
            container
            item
            xs={12}
            sm={6}
            direction="row"
            justifyContent="center"
            alignItems="center"
            p={{ xs: "16px", sm: "32x", md: "48px" }}
            spacing={3}
          >
            <Grid item xs={12}>
              <Typography variant="h1" color="text.primary">
                Lorem Ipsum is a dummy text
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Grid>
          </Grid>
          {/* Image */}
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                height: { xs: "240px", sm: "100%" },
                width: "100%",
                backgroundImage: `url(${hero3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
        </Grid>
        {/* Ad Banner */}
        <Grid item m={{ xs: "16px", sm: "32x", md: "48px" }}>
          <AdBanner
            copyCalls={[
              {
                phrase1: "Controle",
                phrase2: "sua brisa",
              },
              {
                phrase1: "Reduza",
                phrase2: "os danos",
              },
              {
                phrase1: "Economize",
                phrase2: "sua erva",
              },
              {
                phraseMainCall1: "GOSTOU",
                phraseMainCall2: "DA IDEIA?",
              },
              {
                phraseButtonCall1: "ADQUIRA JÁ",
                phraseButtonCall2: "SEU VAPORIZADOR",
              },
              {
                img: "https://i0.wp.com/www.smokebuddies.com.br/wp-content/uploads/2017/08/Conheca-5-modelos-de-Vaporizadores-que-cabem-literalmente-no-bolso.jpeg?fit=900%2C506&ssl=1",
                url: "https://loja.saudevapor.com/",
              },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
