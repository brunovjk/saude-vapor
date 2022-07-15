import React, { useState, useContext } from "react";
import { AdBanner } from "../../components";
import { Container, Box, Grid, Divider } from "@mui/material";

import MenuSideList from "./MenuSideList";
import MyAccount from "./MyAccount";
import DrawerMenuSideList from "./DrawerMenuSideList";
import { Context } from "../../context/Context";

export default function Dashboard() {
  const { isAuth } = useContext(Context);

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
          <Box p={{ xs: "8px 16px", sm: "16px 32px", lg: "32px 48px" }}>
            <AdBanner />
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
            <DrawerMenuSideList
              setItemSelected={setItemSelected}
              isAuth={isAuth}
            />
          </Grid>
          {/* Component Menu side list */}
          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <MenuSideList setItemSelected={setItemSelected} isAuth={isAuth} />
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
