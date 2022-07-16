import React from "react";
import { Stack, Box, Paper } from "@mui/material";
import accountImg from "../../assets/img/accountImg.jpg";

export default function Partners() {
  return (
    <>
      <Box>
        <Stack
          sx={{ height: "20vh" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              overflow: "hidden",

              backgroundImage: `url(${accountImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Paper>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              overflow: "hidden",

              backgroundImage: `url(${accountImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Paper>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              overflow: "hidden",

              backgroundImage: `url(${accountImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Paper>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              overflow: "hidden",

              backgroundImage: `url(${accountImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Paper>
        </Stack>
      </Box>
    </>
  );
}
