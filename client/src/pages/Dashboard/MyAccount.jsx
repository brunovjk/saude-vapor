import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Grid,
  Divider,
  Button,
  Typography,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { Context } from "../../context/Context";
import DeleteDialog from "./DeleteDialog";
import { auth } from "../../context/firebase-config";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";

export default function MyAccount() {
  const { isAuth } = useContext(Context);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [providerId, setProviderId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [nameButtonState, setNameButtonState] = useState(true);
  const [emailButtonState, setEmailButtonState] = useState(true);
  const [passwordButtonState, setPasswordButtonState] = useState(true);

  const [successAlert, setSuccessAlert] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const user = auth.currentUser;

  useEffect(() => {
    try {
      if (user) {
        setDisplayName(user.displayName);
        setEmail(user.email);
        setProviderId(user.providerData[0].providerId);
      }
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const onChangeName = (value) => {
    setDisplayName(value.target.value);
  };

  const nameButton = () => {
    if (providerId !== "password") {
      setSuccessMessage(
        `Voce esta usando uma conta cadastrada em um provedor externo. Por favor entre ${providerId} para alterar seus dados`
      );
      setSuccessAlert(true);
      return;
    } else {
      try {
        if (nameButtonState === true) {
          setNameButtonState(false);
        } else if (nameButtonState === false) {
          updateProfile(auth.currentUser, {
            displayName: displayName,
          })
            .then(() => {
              setNameButtonState(true);
              setSuccessMessage("Nome alterado com sucesso");
              setSuccessAlert(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onChangeEmail = (value) => {
    setEmail(value.target.value);
  };

  const emailButton = () => {
    if (providerId !== "password") {
      setSuccessMessage(
        `Voce esta usando uma conta cadastrada em um provedor externo. Por favor entre ${providerId} para alterar seus dados`
      );
      setSuccessAlert(true);
      return;
    } else {
      try {
        if (emailButtonState === true) {
          setEmailButtonState(false);
        } else if (emailButtonState === false) {
          updateEmail(auth.currentUser, email)
            .then(() => {
              setEmailButtonState(true);
              setSuccessMessage("E-mail alterado com sucesso");
              setSuccessAlert(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onChangePassword = (value) => {
    setpassword(value.target.value);
  };

  const passwordButton = () => {
    if (providerId !== "password") {
      setSuccessMessage(
        `Voce esta usando uma conta cadastrada em um provedor externo. Por favor entre ${providerId} para alterar seus dados`
      );
      setSuccessAlert(true);
      return;
    } else {
      try {
        if (passwordButtonState === true) {
          setPasswordButtonState(false);
        } else if (passwordButtonState === false) {
          updatePassword(auth.currentUser, password)
            .then(() => {
              setPasswordButtonState(true);
              setSuccessMessage("Senha alterado com sucesso");
              setSuccessAlert(true);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSuccessAlert(false);
  };

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
                    disabled={nameButtonState}
                    id="name"
                    label="Nome"
                    defaultValue={displayName}
                    onChange={onChangeName}
                  />
                </Grid>
                <Grid item>
                  <Button variant="text" onClick={nameButton}>
                    Editar Nome
                  </Button>
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
                    disabled={emailButtonState}
                    id="email"
                    label="E-mail"
                    type="email"
                    defaultValue={email}
                    onChange={onChangeEmail}
                  />
                </Grid>
                <Grid item>
                  <Button variant="text" onClick={emailButton}>
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
                    disabled={passwordButtonState}
                    id="password"
                    label="Senha"
                    type="password"
                    defaultValue={password}
                    onChange={onChangePassword}
                  />
                </Grid>
                <Grid item>
                  <Button variant="text" onClick={passwordButton}>
                    Editar Senha
                  </Button>
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
      {/* Alert */}
      <Snackbar
        open={successAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          {successMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
