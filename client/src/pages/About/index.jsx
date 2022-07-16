import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { AdBanner, Partners } from "../../components";
import hero1 from "../../assets/img/hero1.png";
import hero2 from "../../assets/img/hero2.png";
import hero3 from "../../assets/img/hero3.png";

export default function About() {
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
          <Grid item xs={12} mt={{ xs: "16px", sm: "32px", md: "64px" }}>
            <Typography variant="h1" color="text.primary">
              {t("About.heroSection.title")}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={{ xs: "8px", sm: "16px", md: "32px" }}>
            <Typography variant="subtitle" color="text.secondary">
              {t("About.heroSection.text")}
            </Typography>
          </Grid>
        </Grid>
        {/* Image */}
        <Grid container item xs={12} md={8}>
          <Box component="img" src={hero1} sx={{ width: "100%" }} />
        </Grid>
      </Grid>
      {/* Section 1 */}
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        my={{ xs: "16px", sm: "32x", md: "64px" }}
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
          <Grid item xs={10}>
            <Typography variant="h1" color="text.primary">
              {t("About.section1.title")}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle" color="text.secondary">
              {t("About.section1.text")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* Section 2 */}
      <Grid
        container
        item
        xs={12}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        my={{ xs: "16px", sm: "32x", md: "64px" }}
        pb={{ xs: "16px", sm: "32x", md: "64px" }}
      >
        {/* Copy */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          direction="row"
          justifyContent="center"
          alignItems="center"
          p={{ xs: "16px", sm: "32x", md: "48px" }}
          spacing={3}
        >
          <Grid item xs={10}>
            <Typography variant="h1" color="text.primary">
              {t("About.section2.title")}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle" color="text.secondary">
              {t("About.section2.text1")}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle" color="text.secondary">
              {t("About.section2.text2")}
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle" color="text.secondary">
              {t("About.section2.text3")}
            </Typography>
          </Grid>
        </Grid>
        {/* Image */}
        <Grid item xs={12} sm={5}>
          <Box
            sx={{
              height: { xs: "240px", sm: "100%" },
              width: "100%",
              backgroundImage: `url(${hero3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </Grid>
      </Grid>
      {/* Ad Banner */}
      <Grid item m={{ xs: "16px", sm: "32x", md: "48px" }}>
        <AdBanner />
      </Grid>
      {/* Partners */}
      <Grid item m={{ xs: "16px", sm: "32x", md: "48px" }}>
        <Partners />
      </Grid>
    </Grid>
  );
}
