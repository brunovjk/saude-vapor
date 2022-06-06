import * as React from "react";
import { Box, Drawer, Divider, Typography, Grid, Button } from "@mui/material";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const DrawerCartComponent = (props) => {
  const sideList = () => (
    <Box sx={{ width: { xs: "19rem", md: "24rem" }, p: { xs: "1rem" } }}>
      <Box sx={{ p: "1rem" }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item>
            <KeyboardArrowLeftIcon
              onClick={props.toggleDrawerCartHandler}
              sx={{ cursor: "pointer" }}
            />
          </Grid>
          <Grid item>
            <Typography variant="h3">Seu carrinho</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h3" color="primary">
              (0 items)
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Divider />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ pt: { xs: "6rem", md: "12rem" } }}
        spacing={6}
      >
        <Grid item>
          <ShoppingBagOutlinedIcon fontSize="large" />
        </Grid>
        <Grid item>
          <Typography variant="h3">Seu carrinho está vazio</Typography>
        </Grid>
        <Grid item>
          <Button onClick={props.toggleDrawerCartHandler}>
            Continue comprando
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Drawer
      open={props.open}
      onClose={props.toggleDrawerCartHandler}
      anchor="right"
    >
      {sideList()}
    </Drawer>
  );
};

export default DrawerCartComponent;
