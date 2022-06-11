import React from "react";
import { Box, Grid, Button, Typography, TextField } from "@mui/material";

export default function EditFieldComponent() {
  return (
    <Box>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={3}
      >
        {/* Personal information */}
        <Grid
          container
          item
          xs={12}
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          {/* Field to edit */}
          <Grid item>
            <Typography color="text.primary" variant="h3">
              Informações pessoais
            </Typography>
          </Grid>
          {/* Old field */}
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={3}
          >
            <Grid item>
              <TextField
                disabled
                id="outlined-disabled"
                label="E-mail"
                defaultValue="{E-mail}"
              />
            </Grid>
            <Grid item>
              <Typography variant="underline1" color="primary">
                Editar "E-mail"
              </Typography>
            </Grid>
          </Grid>
          {/* New field */}
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={3}
          >
            <Grid item>
              <TextField
                disabled
                id="outlined-disabled"
                label="Senha"
                defaultValue="{Senha}"
              />
            </Grid>
            <Grid item>
              <Typography variant="underline1" color="primary">
                Editar "Senha"
              </Typography>
            </Grid>
          </Grid>
          {/* Confirm new field */}
          <Grid
            container
            item
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-end"
            spacing={3}
          >
            <Grid item>
              <TextField
                disabled
                id="outlined-disabled"
                label="Senha"
                defaultValue="{Senha}"
              />
            </Grid>
            <Grid item>
              <Typography variant="underline1" color="primary">
                Editar "Senha"
              </Typography>
            </Grid>
          </Grid>
          {/* Button */}
          <Grid item>
            <Button>Deletar</Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
