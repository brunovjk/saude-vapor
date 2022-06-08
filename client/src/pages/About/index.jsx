import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { AdBanner } from "../../components";

export default function About() {
  return (
    <Container>
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
          alignItems="stretch"
        >
          {/* Copy */}
          <Grid
            container
            item
            xs={12}
            md={5}
            pt={{ xs: "16px", sm: "32px", md: "128px" }}
          >
            <Grid item xs={12}>
              <Typography variant="h2" color="primary.30">
                Saude Vapor
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h1" color="text.primary">
                Lorem Ipsum is simply dummy text of the printing
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </Grid>
          </Grid>
          {/* Image */}
          <Grid
            container
            item
            xs={12}
            md={7}
            sx={{ height: { xs: "100%", md: "332px" } }}
          >
            <Box
              component="img"
              src="https://ethereum.org/static/e7a074a56d991c4f9e65857bafa0f053/1828a/what-is-ethereum.webp"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/* Section 1 */}
        <Grid
          container
          item
          xs={12}
          my={{ xs: "16px", sm: "32px", md: "96px" }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ width: { xs: "500px", md: "700px" } }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Grid>
        {/* Ad Banner */}
        <Grid container item xs={12}>
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
        {/* Section 2 */}
        <Grid container item xs={12}></Grid>
        {/* Section 3 */}
        <Grid container item xs={12}></Grid>
      </Grid>
    </Container>
  );
}
