import React, { useContext } from "react";
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
        <AdBanner
          copyCalls={[
            {
              phrase1: "Controle",
              phrase2: "sua brisa",
            },
            {
              phrase1: "Reduza",
              phrase2: "os danos",
            },
            {
              phrase1: "Economize",
              phrase2: "sua erva",
            },
            {
              phraseMainCall1: "GOSTOU",
              phraseMainCall2: "DA IDEIA?",
            },
            {
              phraseButtonCall1: "ADQUIRA JÁ",
              phraseButtonCall2: "SEU VAPORIZADOR",
            },
            {
              img: "https://i0.wp.com/www.smokebuddies.com.br/wp-content/uploads/2017/08/Conheca-5-modelos-de-Vaporizadores-que-cabem-literalmente-no-bolso.jpeg?fit=900%2C506&ssl=1",
              url: "https://loja.saudevapor.com/",
            },
          ]}
        />
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
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
              >
                <Typography variant="underline2" color="secondary.text">
                  {postData.date}
                </Typography>

                <Divider
                  sx={{ width: "12px", display: { xs: "none", sm: "block" } }}
                />

                <Typography variant="underline1" color="secondary.text">
                  Autor:
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

                <Divider
                  sx={{ width: "12px", display: { xs: "none", sm: "block" } }}
                />
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
                    Editar
                  </Typography>

                  <Typography
                    variant="underline1"
                    color="error"
                    component="span"
                    sx={{ cursor: "pointer" }}
                    onClick={deletePost}
                  >
                    Deletar
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
                        <AdBanner
                          vertical={true}
                          copyCalls={[
                            {
                              phrase1: "Controle",
                              phrase2: "sua brisa",
                            },
                            {
                              phrase1: "Reduza",
                              phrase2: "os danos",
                            },
                            {
                              phrase1: "Economize",
                              phrase2: "sua erva",
                            },
                            {
                              phraseMainCall1: "GOSTOU",
                              phraseMainCall2: "DA IDEIA?",
                            },
                            {
                              phraseButtonCall1: "ADQUIRA JÁ",
                              phraseButtonCall2: "SEU VAPORIZADOR",
                            },
                            {
                              img: "https://i0.wp.com/www.smokebuddies.com.br/wp-content/uploads/2017/08/Conheca-5-modelos-de-Vaporizadores-que-cabem-literalmente-no-bolso.jpeg?fit=900%2C506&ssl=1",
                              url: "https://loja.saudevapor.com/",
                            },
                          ]}
                        />
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
