import React, { useState, useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Box,
  Grid,
  Divider,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { Context } from "../../context/Context";
import DeleteDialog from "./DeleteDialog";
import { auth } from "../../context/firebase-config";
import { updateProfile, updateEmail, updatePassword } from "firebase/auth";
import { AlertComponent } from "../../components";

export default function MyAccount() {
  const { t } = useTranslation();
  const { isAuth } = useContext(Context);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [providerId, setProviderId] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [nameButtonState, setNameButtonState] = useState(true);
  const [emailButtonState, setEmailButtonState] = useState(true);
  const [passwordButtonState, setPasswordButtonState] = useState(true);

  const [alertComponent, setAlertComponent] = useState({
    openAlert: false,
    severity: "success",
    message: "",
  });

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
      setAlertComponent({
        openAlert: true,
        severity: "error",
        message: t("Dashboard.myAccount.alert.alert1"),
      });
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
              setAlertComponent({
                openAlert: true,
                severity: "success",
                message: t("Dashboard.myAccount.alert.alert2"),
              });
            })
            .catch((error) => {
              setAlertComponent({
                openAlert: true,
                severity: "error",
                message: t("Dashboard.myAccount.alert.alert3"),
              });
            });
        }
      } catch (error) {}
    }
  };

  const onChangeEmail = (value) => {
    setEmail(value.target.value);
  };

  const emailButton = () => {
    if (providerId !== "password") {
      setAlertComponent({
        openAlert: true,
        severity: "error",
        message: t("Dashboard.myAccount.alert.alert1"),
      });
      return;
    } else {
      try {
        if (emailButtonState === true) {
          setEmailButtonState(false);
        } else if (emailButtonState === false) {
          updateEmail(auth.currentUser, email)
            .then(() => {
              setEmailButtonState(true);
              setAlertComponent({
                openAlert: true,
                severity: "success",
                message: t("Dashboard.myAccount.alert.alert4"),
              });
            })
            .catch((error) => {
              setAlertComponent({
                openAlert: true,
                severity: "error",
                message: t("Dashboard.myAccount.alert.alert5"),
              });
            });
        }
      } catch (error) {}
    }
  };

  const onChangePassword = (value) => {
    setpassword(value.target.value);
  };

  const passwordButton = () => {
    if (providerId !== "password") {
      setAlertComponent({
        openAlert: true,
        severity: "error",
        message: t("Dashboard.myAccount.alert.alert1"),
      });
      return;
    } else {
      try {
        if (passwordButtonState === true) {
          setPasswordButtonState(false);
        } else if (passwordButtonState === false) {
          updatePassword(auth.currentUser, password)
            .then(() => {
              setPasswordButtonState(true);
              setAlertComponent({
                openAlert: true,
                severity: "success",
                message: t("Dashboard.myAccount.alert.alert1"),
              });
            })
            .catch((error) => {
              setAlertComponent({
                openAlert: true,
                severity: "error",
                message: t("Dashboard.myAccount.alert.alert1"),
              });
            });
        }
      } catch (error) {}
    }
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
                  {t("Dashboard.myAccount.personalInfo.title")}
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
                    label={t("Dashboard.myAccount.personalInfo.name.textField")}
                    defaultValue={displayName}
                    onChange={onChangeName}
                  />
                </Grid>
                <Grid item>
                  <Button variant="text" onClick={nameButton}>
                    {t("Dashboard.myAccount.personalInfo.name.button")}
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
                    label={t(
                      "Dashboard.myAccount.personalInfo.email.textField"
                    )}
                    type="email"
                    defaultValue={email}
                    onChange={onChangeEmail}
                  />
                </Grid>
                <Grid item>
                  <Button variant="text" onClick={emailButton}>
                    {t("Dashboard.myAccount.personalInfo.email.button")}
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
                    label={t(
                      "Dashboard.myAccount.personalInfo.password.textField"
                    )}
                    type="password"
                    defaultValue={password}
                    onChange={onChangePassword}
                  />
                </Grid>
                <Grid item>
                  <Button variant="text" onClick={passwordButton}>
                    {t("Dashboard.myAccount.personalInfo.password.button")}
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
                  {t("Dashboard.myAccount.deleteAcc.title")}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" color="text.secondary">
                  {t("Dashboard.myAccount.deleteAcc.text")}
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  onClick={() => {
                    setOpenDeleteDialog(true);
                  }}
                >
                  {t("Dashboard.myAccount.deleteAcc.button")}
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
      <AlertComponent
        alertComponent={alertComponent}
        setAlertComponent={setAlertComponent}
      />
    </>
  );
}
