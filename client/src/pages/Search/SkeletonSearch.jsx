import React from "react";
import {
  TextField,
  Grid,
  Paper,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";
import { AdBanner } from "../../components";

export default function DataSearch({ collectionData }) {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={{ xs: "16px", sm: "32px", md: "64px" }}
      p={{ xs: "16px", sm: "32px", md: "64px" }}
    >
      {/* AdBanner */}
      <Grid item>
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
      </Grid>
      {/* Search Field and Filters */}
      <Grid item>
        <Paper
          sx={{
            p: { xs: "8px 16px", sm: "8px 24px", md: "8px 32px" },
            mx: { xs: "16px", sm: "32px", md: "128px" },
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {/* Search filed */}
            <Grid item xs={12} md={9}>
              <TextField
                fullWidth={true}
                id="busca"
                label="Busque..."
                variant="outlined"
              />
            </Grid>
            {/* Filters */}

            <Grid item xs={12} md={3}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Categoria</InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  value="Todos categorias"
                  label="Categoria"
                >
                  <MenuItem value={""}>Todos categorias</MenuItem>
                  <MenuItem value={"Noticias"}>Noticias</MenuItem>
                  <MenuItem value={"Artigos"}>Artigos</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {/* Cards  container */}
      <Grid container item spacing={{ xs: "16px", sm: "32px", md: "64px" }}>
        {Array.from(Array(12).keys()).map((data, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                elevation={2}
                sx={{
                  cursor: "pointer",
                  borderRadius: "18px",
                }}
              >
                <Grid container direction="column" sx={{ height: "324px" }}>
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
                        <Skeleton animation="wave" height={10} width="25%" />
                      </Grid>
                      <Grid item>
                        <Skeleton animation="wave" height={10} width="25%" />
                      </Grid>
                      <Grid item>
                        <Skeleton animation="wave" height={22} width="100%" />
                      </Grid>
                      <Grid item>
                        <Skeleton animation="wave" height={22} width="100%" />
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
  );
}
