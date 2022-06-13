import React from "react";
import { Stack, Fab } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function FABSocialMedia(props) {
  return (
    <Stack
      direction={props.direction}
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      mt={props.mt}
      mr={props.mr}
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
