import React from "react";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  IconButton,
  Button,
} from "@mui/material";

import accountImg from "../../assets/img/accountImg.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Contact() {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={{ xs: 0, sm: 3, md: 10 }}
        p={{ xs: "0px", sm: "16px", md: "64px" }}
      >
        {/* Image */}
        <Grid item xs={0} sm={5}>
          <Paper
            sx={{
              height: "100%",
              width: "100%",
              overflow: "hidden",
              borderRadius: "40px",
              backgroundImage: `url(${accountImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></Paper>
        </Grid>
        {/* Form */}
        <Grid
          container
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          xs={12}
          sm={7}
          spacing={2}
        >
          {/* Text and icons */}
          <Grid
            container
            item
            direction={{ xs: "column", sm: "row-reverse" }}
            justifyContent={{ xs: "flex-start", sm: "space-between" }}
            alignItems={{ xs: "stretch", sm: "center" }}
            mb={{ xs: "8px", sm: "16px", md: "32px" }}
          >
            {/* Icons */}
            <Grid
              container
              item
              direction={{ xs: "row", sm: "column" }}
              justifyContent="space-between"
              alignItems="center"
              p={{ xs: "16px 32px", sm: "0px" }}
              sx={{ width: { xs: "100%", sm: "48px" } }}
            >
              <IconButton>
                <FacebookIcon color="primary" />
              </IconButton>
              <IconButton>
                <TwitterIcon color="primary" />
              </IconButton>
              <IconButton>
                <InstagramIcon color="primary" />
              </IconButton>
            </Grid>
            {/* Text */}
            <Grid
              container
              item
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              sx={{ width: "288px" }}
              spacing={2}
            >
              <Grid item>
                <Typography variant="h1">Fale Conosco</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                  Envie uma mensagem,
                  <br />
                  te respoderemos por e-mail.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Name field */}
          <Grid item>
            <TextField
              fullWidth={true}
              id="Nome-field"
              label="Nome"
              variant="outlined"
            />
          </Grid>
          {/* E-mail field */}
          <Grid item>
            <TextField
              fullWidth={true}
              id="E-mail-field"
              label="E-mail"
              variant="outlined"
            />
          </Grid>
          {/* Message field */}
          <Grid item>
            <TextField
              fullWidth={true}
              id="Mensagem-field"
              label="Mensagem"
              variant="outlined"
              multiline
              rows={12}
            />
          </Grid>
          {/* Button */}
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button fullWidth={true} sx={{ m: { xs: "16px", sm: "32px" } }}>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
