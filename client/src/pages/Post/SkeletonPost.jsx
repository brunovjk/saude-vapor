import React from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  Stack,
  Skeleton,
} from "@mui/material";
import { AdBanner, FABSocialMedia } from "../../components";
import { StickyContainer, Sticky } from "react-sticky";

export default function SkeletonPost() {
  const { t } = useTranslation();
  return (
    <>
      {/* AdBanner Mobile tablet*/}
      <Box
        p={{ xs: "8px 16px", sm: "16px 32px", lg: "32px 128px" }}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <AdBanner />
      </Box>
      <Divider />
      <Container>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={{ xs: 2, md: 5 }}
          py={{ xs: "8px", sm: "16px", md: "32px" }}
        >
          {/* Title */}
          <Grid item>
            <Skeleton animation="wave" height={56} width="75%" />

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Skeleton animation="wave" height={14} width="8%" />

              <Divider
                sx={{ width: "12px", display: { xs: "none", sm: "block" } }}
              />

              <Typography variant="underline1" color="secondary.text">
                {t("Post.post.author")}
              </Typography>

              <Skeleton animation="wave" height={14} width="15%" />
            </Stack>
          </Grid>

          {/* Image */}
          <Grid item sx={{ height: { xs: "80px", sm: "200px", md: "280px" } }}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
            />
          </Grid>
          {/* Fab Social Media, text and AdBanner */}
          <Grid item>
            <StickyContainer>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={{ xs: 2, md: 0 }}
              >
                {/* FABSocialMedia */}
                <Grid item xs={12} md={1}>
                  <FABSocialMedia direction={{ xs: "row", md: "column" }} />
                </Grid>
                {/* Text */}
                <Grid item xs={12} md={8}>
                  <Skeleton animation="wave" height={22} width="100%" />
                  <Skeleton animation="wave" height={22} width="100%" />
                  <Skeleton animation="wave" height={22} width="100%" />
                  <Skeleton animation="wave" height={22} width="100%" />
                  <Skeleton animation="wave" height={22} width="100%" />
                </Grid>
                {/* Ad Banner Desktop */}
                <Grid
                  item
                  xs={12}
                  md={3}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  <Sticky>
                    {({ style }) => (
                      <Box style={style}>
                        <AdBanner vertical={true} />
                      </Box>
                    )}
                  </Sticky>
                </Grid>
              </Grid>
            </StickyContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
