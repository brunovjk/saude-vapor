import React, { useState } from "react";
import { AdBanner } from "../../components";
import { Container, Box, Grid, Divider } from "@mui/material";

import MenuSideList from "./MenuSideList";
import MyAccount from "./MyAccount";
import DrawerMenuSideList from "./DrawerMenuSideList";

export default function Dashboard() {
  const [itemSelected, setItemSelected] = useState(<MyAccount />);

  return (
    <Container>
      <Grid
        container
        direction={{ xs: "column-reverse", md: "column" }}
        justifyContent="flex-start"
        alignItems="stretch"
      >
        {/* AdBanner */}
        <Grid item xs={12}>
          <Box p={{ xs: "8px 16px", sm: "16px 32px", lg: "32px 128px" }}>
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
          </Box>
        </Grid>
        <Divider />
        {/* Dashboard + Menu side list*/}
        <Grid
          container
          item
          xs={12}
          direction="row"
          justifyContent="space-around"
          alignItems="stretch"
        >
          {/* Drawer Menu side list */}
          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <DrawerMenuSideList setItemSelected={setItemSelected} />
          </Grid>
          {/* Component Menu side list */}
          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <MenuSideList setItemSelected={setItemSelected} />
          </Grid>

          <Divider
            orientation="vertical"
            flexItem
            sx={{ display: { xs: "none", md: "block" } }}
          />
          {/* Dashboard */}
          <Grid item xs={12} md={8} sx={{ minHeight: "50vh", my: "32px" }}>
            {itemSelected}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
