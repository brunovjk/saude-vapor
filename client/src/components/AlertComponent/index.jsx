import React from "react";

import { Alert, Snackbar } from "@mui/material";

export default function AlertComponent({ alertComponent, setAlertComponent }) {
  // handleClose Alert
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlertComponent({
      openAlert: false,
    });
  };
  return (
    <>
      <Snackbar
        open={alertComponent.openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity={alertComponent.severity}
          sx={{ width: "100%" }}
        >
          {alertComponent.message}
        </Alert>
      </Snackbar>
    </>
  );
}
