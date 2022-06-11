import React from "react";
import {
  Box,
  Grid,
  Divider,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import EditFieldComponent from "./EditFieldComponent";

export default function MyAccountComponent({ setComponentToRender }) {
  const handleEditFieldComponent = () => {
    setComponentToRender(<EditFieldComponent />);
  };
  return (
    <Box>
      <Box>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={5}
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
            {/* Personal information */}
            <Grid item>
              <Typography color="text.primary" variant="h3">
                Informações pessoais
              </Typography>
            </Grid>
            {/* E-mail */}
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
                <Button
                  onClick={() => {
                    handleEditFieldComponent();
                  }}
                  variant="text"
                >
                  Editar E-mail
                </Button>
              </Grid>
            </Grid>
            {/* Password */}
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
                <Button variant="text">Editar Senha</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          {/* Delete account */}
          <Grid
            container
            item
            xs={12}
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h3" color="text.primary">
                Deletar conta
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="text.secondary">
                Para deletar sua conta clique no botão DELETAR, em seguida
                digite sua senha e clique em CONFIRMAR.
              </Typography>
            </Grid>
            <Grid item>
              <Button>Deletar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
