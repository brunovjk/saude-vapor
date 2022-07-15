import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, Typography } from "@mui/material";
import { AdBanner } from "../../components";
import { StickyContainer, Sticky } from "react-sticky";

export default function Terms() {
  const { t } = useTranslation();
  return (
    <StickyContainer>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
        spacing={{ xs: "16px", sm: "32px", md: "64px" }}
        p={{ xs: "16px", sm: "32px", md: "64px" }}
      >
        {/* AdBanner Mobile tablet */}
        <Grid item xs={12} md={4} sx={{ display: { xs: "block", md: "none" } }}>
          <Box>
            <AdBanner />
          </Box>
        </Grid>
        {/* Terms */}
        <Grid item xs={12} md={8}>
          <Box component="div">
            <Typography variant="h1" pb="16px">
              {t("Terms.title")}
            </Typography>
            <Typography variant="body1">{t("Terms.text")}</Typography>
          </Box>
        </Grid>
        {/* AdBanner Sticky desktop*/}
        <Grid item xs={12} md={4} sx={{ display: { xs: "none", md: "block" } }}>
          <Sticky>
            {({ style }) => (
              <Box style={style} py="32px">
                <AdBanner vertical={true} />
              </Box>
            )}
          </Sticky>
        </Grid>
      </Grid>
    </StickyContainer>
  );
}
