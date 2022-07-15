import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  Paper,
  Grid,
  Typography,
  Box,
  Divider,
  Link,
  Stack,
} from "@mui/material";
import { AdBanner, FABSocialMedia } from "../../components";
import { StickyContainer, Sticky } from "react-sticky";

import { Context } from "../../context/Context";

export default function DataPost({
  postData,
  handleOpenEdit,
  setOpenDeleteConfirmation,
}) {
  const { t } = useTranslation();
  const { isAuth } = useContext(Context);

  const deletePost = () => {
    setOpenDeleteConfirmation(true);
  };
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
            <Typography variant="h1" color="primary.text">
              {postData.title}
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="flex-start"
              alignItems="flex-start"
              spacing={1}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="flex-start"
                alignItems={{ xs: "flex-start", sm: "center" }}
                spacing={1}
              >
                <Typography variant="underline2" color="secondary.text">
                  {postData.date}
                </Typography>

                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <Typography variant="underline1" color="secondary.text">
                    {t("Post.post.author")}
                  </Typography>

                  <Typography variant="underline1" color="primary">
                    <Link
                      target="_blank"
                      rel="noopener"
                      color="secondary.40"
                      underline="none"
                      href={postData.linkAuthor}
                    >
                      {postData.author}
                    </Link>
                  </Typography>
                </Stack>
              </Stack>
              {isAuth && (
                <Stack
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={1}
                >
                  <Typography
                    variant="underline1"
                    color="secondary.text"
                    component="span"
                    sx={{ cursor: "pointer" }}
                    onClick={handleOpenEdit}
                  >
                    {t("Post.post.edit")}
                  </Typography>

                  <Typography
                    variant="underline1"
                    color="error"
                    component="span"
                    sx={{ cursor: "pointer" }}
                    onClick={deletePost}
                  >
                    {t("Post.post.delete")}
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Grid>

          {/* Image */}
          <Grid item>
            <Paper
              sx={{
                height: { xs: "80px", sm: "200px", md: "280px" },
                width: "100%",
                overflow: "hidden",
                borderRadius: "20px",
                backgroundImage: `url(${postData.urlImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></Paper>
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
                  <Typography
                    variant="body1"
                    color="primary.text"
                    component="div"
                    sx={{ mt: "-16px" }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: postData.text,
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
      </Container>
    </>
  );
}
