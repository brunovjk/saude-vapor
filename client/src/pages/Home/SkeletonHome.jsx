import React from "react";
import { FABSocialMedia } from "../../components";
import { Container, Grid, Paper, Card, Skeleton } from "@mui/material";

export default function SkeletonHome() {
  return (
    <>
      {/* FABSocialMedia */}
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-end"
        sx={{
          widht: "0px",
          height: "0px",
        }}
      >
        <FABSocialMedia mt="10vh" mr="2vw" direction="column" />
      </Grid>
      {/* Banners container */}
      <Paper
        elevation={2}
        sx={{
          borderRadius: "0px",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-end"
          alignItems="stretch"
          sx={{ width: "100%", height: "70vh" }}
        >
          <Grid
            container
            item
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            sx={{ p: { xs: "16px", sm: "32px", md: "64px" } }}
            spacing={3}
          >
            <Grid item>
              <Skeleton animation="wave" height={56} width="100%" />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" height={10} width="8%" />
            </Grid>
            <Grid item>
              <Skeleton animation="wave" height={22} width="100%" />
              <Skeleton animation="wave" height={22} width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      {/* Body */}
      <Container sx={{ my: { xs: "16px", sm: "32px", md: "48px" } }}>
        <Grid container spacing={{ xs: "8px", sm: "16px", md: "32px" }}>
          {/* Cards  container */}
          <Grid container item spacing={{ xs: "16px", sm: "32px", md: "64px" }}>
            {Array.from(Array(12).keys()).map((data, index) => {
              return (
                <Grid item xs={12} md={6} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      cursor: "pointer",
                      borderRadius: "18px",
                    }}
                  >
                    <Grid container direction="row" sx={{ height: "124px" }}>
                      <Grid item xs={5}>
                        <Skeleton
                          sx={{ height: "100%" }}
                          animation="wave"
                          variant="rectangular"
                        />
                      </Grid>
                      <Grid item xs={7}>
                        <Grid
                          container
                          direction="column"
                          justifyContent="space-evenly"
                          alignItems="stretch"
                          sx={{
                            height: "100%",
                            p: "16px",
                          }}
                        >
                          <Grid item>
                            <Skeleton
                              animation="wave"
                              height={10}
                              width="25%"
                            />
                          </Grid>
                          <Grid item>
                            <Skeleton
                              animation="wave"
                              height={10}
                              width="25%"
                            />
                          </Grid>
                          <Grid item>
                            <Skeleton
                              animation="wave"
                              height={22}
                              width="100%"
                            />
                          </Grid>
                          <Grid item>
                            <Skeleton
                              animation="wave"
                              height={22}
                              width="100%"
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
