import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Grid,
  Divider,
  Button,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import { Context } from "../../context/Context";
import DeleteDialog from "./DeleteDialog";

const currentUserProvider = localStorage.getItem("currentUserProvider");

function EditAtGooGleFacebook() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h3" color="primary.text">
          Você está conectado através de uma conta {currentUserProvider}.
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body2" color="secodnary.text">
          Para Alterar seus dados, por favor entre diretamente com{" "}
          {currentUserProvider}.
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" color="primary.text">
          Obrigado.
        </Typography>
      </Grid>
    </Grid>
  );
}
function PersonalInformation() {
  return (
    <Grid
      container
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
      {/* Nome */}
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
            label="Nome"
            defaultValue="{Nome}"
          />
        </Grid>
        <Grid item>
          <Button variant="text">Editar Nome</Button>
        </Grid>
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
          <Button variant="text">Editar E-mail</Button>
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
  );
}
export default function MyAccount() {
  const { isAuth } = useContext(Context);
  const [componentToMont, setComponentToMont] = useState(
    <CircularProgress sx={{ m: "64px" }} />
  );
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  useEffect(() => {
    try {
      if (currentUserProvider === "password") {
        setComponentToMont(<PersonalInformation />);
      } else {
        setComponentToMont(<EditAtGooGleFacebook />);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      {isAuth && (
        <Box>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={5}
          >
            {/* Personal information */}

            <Grid item xs={12}>
              {componentToMont}
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
                  Sua conta sera deletada permanentemente, não sendo possível
                  recupera-lá. Mas você pode criar uma conta nova a qualquer
                  momento.
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    setOpenDeleteDialog(true);
                  }}
                >
                  Deletar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
      <DeleteDialog
        openDeleteDialog={openDeleteDialog}
        setOpenDeleteDialog={setOpenDeleteDialog}
      />
    </>
  );
}
