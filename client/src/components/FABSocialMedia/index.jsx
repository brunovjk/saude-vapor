import React from "react";
import { Stack, Fab } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function FABSocialMedia() {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt="10vh"
      mr="2vw"
    >
      <Fab color="primary" size="small" aria-label="facebook">
        <FacebookIcon fontSize="small" color="secondary" />
      </Fab>
      <Fab color="primary" size="small" aria-label="twitter">
        <TwitterIcon fontSize="small" color="secondary" />
      </Fab>
      <Fab color="primary" size="small" aria-label="instagram">
        <InstagramIcon fontSize="small" color="secondary" />
      </Fab>
    </Stack>
  );
}
