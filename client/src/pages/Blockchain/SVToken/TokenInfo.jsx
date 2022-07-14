import React, { useState, useEffect } from "react";
import { Grid, Typography, Box, Divider, Stack, Skeleton } from "@mui/material";
import { AdBanner, FABSocialMedia } from "../../../components";
import { StickyContainer, Sticky } from "react-sticky";
import { useLocation } from "react-router-dom";

export default function TokenInfo() {
  const stateInfo = useLocation().state;
  const [addresssender, setAddresssender] = useState(
    <Skeleton animation="wave" height={14} width="25%" />
  );
  const [tokenid, setTokenid] = useState(
    <Skeleton animation="wave" height={14} width="15%" />
  );
  const [language, setLanguage] = useState(
    <Skeleton animation="wave" height={14} width="8%" />
  );
  const [title, setTitle] = useState(
    <Skeleton animation="wave" height={56} width="100%" />
  );
  const [content, setContent] = useState(
    <>
      <Skeleton animation="wave" height={22} width="100%" />
      <Skeleton animation="wave" height={22} width="100%" />
      <Skeleton animation="wave" height={22} width="100%" />
      <Skeleton animation="wave" height={22} width="100%" />
      <Skeleton animation="wave" height={22} width="100%" />
    </>
  );

  useEffect(() => {
    try {
      if (stateInfo) {
        setAddresssender(stateInfo.addresssender);
        setTokenid(stateInfo.tokenid);
        setLanguage(stateInfo.language);
        setTitle(stateInfo.title);
        setContent(stateInfo.content);
      }
    } catch (error) {
      console.log(error);
    }
  }, [stateInfo]);

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
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        spacing={{ xs: 2, md: 5 }}
        p={{ xs: "16px", md: "32px" }}
      >
        {/* Title */}
        <Grid item>
          <Typography variant="h1" color="secondary.text">
            {title}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="flex-start"
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={1}
          >
            <Typography variant="underline1" color="secondary.text">
              {language}
            </Typography>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="underline1" color="secondary.text">
                Token ID:
              </Typography>

              <Typography
                variant="underline1"
                color="secondary.text"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                }}
              >
                {tokenid}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="underline1" color="secondary.text">
                Autor:
              </Typography>

              <Typography
                variant="underline1"
                color="secondary.text"
                sx={{
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 1,
                }}
              >
                {addresssender}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {/* Fab Social Media, text and AdBanner */}
        <Grid item>
          <StickyContainer>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={{ xs: 2, md: 5 }}
            >
              {/* FABSocialMedia */}
              <Grid item xs={12} md={1}>
                <FABSocialMedia direction={{ xs: "row", md: "column" }} />
              </Grid>
              {/* Text */}
              <Grid item xs={12} md={8}>
                <Typography variant="underline1" color="secondary.text">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                  />
                </Typography>
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
    </>
  );
}
