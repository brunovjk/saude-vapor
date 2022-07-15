import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { AdBanner } from "../../components";
import { useTranslation } from "react-i18next";
import hero1 from "../../assets/img/hero1.png";
import hero2 from "../../assets/img/hero2.png";

export default function Hero() {
  const { t } = useTranslation();
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      {/* Hero banner */}
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        bgcolor="secondary.95"
        mb={{ xs: "16px", sm: "32x" }}
      >
        {/* Copy */}
        <Grid
          container
          item
          xs={12}
          md={4}
          p={{
            xs: "16px 0px 0px 16px",
            sm: "32px 0px 0px 32px",
            md: "64px 0px 0px 64px",
          }}
          spacing={2}
        >
          <Grid item xs={12}>
            <Typography variant="h3" color="primary.30">
              SaudeVapor
            </Typography>
          </Grid>
          <Grid item xs={12} my={{ xs: "16px", sm: "32px", lg: "86px" }}>
            <Typography variant="subtitle" color="text.secondary">
              {t("Blockchain.heroSection.text")}
            </Typography>
          </Grid>
        </Grid>
        {/* Image */}
        <Grid container item xs={12} md={8}>
          <Box component="img" src={hero1} sx={{ width: "100%" }} />
        </Grid>
      </Grid>
      {/* Ad Banner */}
      <Grid item mx={{ xs: "16px", sm: "32x" }}>
        <AdBanner />
      </Grid>
      {/* Section 1 */}
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        my={{ xs: "16px", sm: "32x" }}
      >
        {/* Image */}
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              height: { xs: "240px", sm: "100%" },
              width: "100%",
              backgroundImage: `url(${hero2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        {/* Copy */}
        <Grid
          container
          item
          xs={12}
          sm={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
          p={{ xs: "16px", sm: "32x", md: "48px" }}
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography variant="h1" color="text.primary">
              {t("Blockchain.section1.title")}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" color="text.secondary">
              {t("Blockchain.section1.text")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
