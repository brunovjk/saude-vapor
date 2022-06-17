import React from "react";
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

import accountImg from "../../assets/img/accountImg.jpg";

export default function Post() {
  // let blogId = decodeURI(window.location.pathname.split("/").pop());

  // const postData =  query postId in postCollection

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
              Conhecimento básico de cannabis
            </Typography>

            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
            >
              <Typography variant="underline2" color="secondary.text">
                12 Jun 2022
              </Typography>

              <Divider sx={{ width: "12px" }} />

              <Typography variant="underline1" color="secondary.text">
                Autor:
              </Typography>

              <Typography variant="underline1" color="primary">
                <Link
                  target="_blank"
                  rel="noopener"
                  color="primary"
                  underline="hover"
                  href="https://dphhs.mt.gov/assets/amdd/Prevention/BasicCannabisKnowledge.pdf"
                >
                  Basic Cannabis
                </Link>
              </Typography>
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
                backgroundImage: `url(${accountImg})`,
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
                <Grid item xs={12} md={0.5}>
                  <FABSocialMedia direction={{ xs: "row", md: "column" }} />
                </Grid>
                {/* Text */}
                <Grid item xs={12} md={8.5}>
                  <Typography variant="body1" color="primary.text">
                    Cannabis é o gênero de três espécies de plantas com flores:
                    Sativa e Indica e ruderalis (naturalmente mais baixo em
                    THC). A maconha é a planta feminina de cannabis na qual as
                    flores contêm uma porcentagem de canabinóides e contêm
                    medicamentos e propriedades psicoativas. Existem 488
                    entidades químicas, e pelo menos 66 são compostos
                    canabinóides. THC e CBD não são os únicos compostos
                    medicinalmente ativos encontrado na maconha.
                    <br />
                    <br />
                    Sativa:
                    <br />A planta Sativa cresce mais alto, tem uma cor mais
                    clara. o planta leva mais tempo para florescer e produz mais
                    Efeitos cerebrais sativa. Esta planta é a maior três
                    famílias. Alívio dos Sintomas: Depressão, ADD, fadiga,
                    transtorno do humor.
                    <br />
                    <br />
                    Indica:
                    <br />
                    As plantas Indica são mais curtas, mais espessas e produzem
                    efeitos físicos sedativos. Alívio dos Sintomas: Dor, Indica
                    ansiedade, insônia, espasmos musculares
                    <br />
                    <br />
                    Ruderalis:
                    <br />
                    Cannabis Ruderalis é uma espécie de baixo teor de THC de
                    Ruderalis Cannabis. Planta muito pequena e de crescimento
                    rápido.
                    <br />
                    <br />
                    O que é cânhamo? Saiba a Diferença
                    <br />
                    <br />
                    CÂNHAMO: Ingrediente Ativo-CBD. Sem efeitos psicoativos.
                    Contém 20% ou mais de CBD e menos de 0,3% de THC. Legal
                    federal.
                    <br />
                    <br />
                    PLANTA DE MACONHA: Ingrediente Ativo-THC. Sim psicoativo
                    efeitos (folhas e flores). Contém 10% ou mais de CBD e mais
                    de 20% de THC. Droga Federal de Classe II ilegal.
                    <br />
                    <br />
                    Muitas partes da planta podem ser produzidas para fazer
                    consumíveis todos os dias
                    <br />
                    <br />O cânhamo é produzido a partir da planta masculina de
                    cannabis. O CBD pode ser obtido tanto do cânhamo quanto do
                    maconha, mas o cânhamo é a melhor escolha, pois não contém
                    THC. (Tetrahidrocanabinol).
                    <br />
                    <br />A semente de cânhamo não contém o composto psicoativo
                    e não deixará os consumidores chapados. Isto mostrou ser
                    benéfico para o tratamento de doenças neurodegenerativas,
                    inflamação, doenças autoimunes e neurodegenerativas.
                    <br />
                    <br />
                    Produtos de consumo
                    <br />
                    Usa o talo e as folhas. Produz têxteis industriais, papel,
                    materiais de construção, têxteis de consumo.
                    <br /> <br />
                    Produtos consumíveis/de higiene
                    <br />
                    Usa as sementes. Produz alimentos, produtos industriais e de
                    higiene pessoal.
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
