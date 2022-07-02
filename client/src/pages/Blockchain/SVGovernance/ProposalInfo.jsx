import React, { useContext } from "react";
import { ContractContext } from "../Context";
import { shortenAddress } from "../../../utils/shortenAddress";
import {
  Grid,
  Paper,
  Box,
  Divider,
  Stack,
  Skeleton,
  Typography
} from "@mui/material";
import { AdBanner, ContractDetails, FABSocialMedia } from "../../../components";
import { StickyContainer, Sticky } from "react-sticky";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


export default function ProposalInfo() {
  const { currentAccount } = useContext(ContractContext);

  return (
    <Grid 
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="stretch"
    p={{ xs: "16px", sm: "24px", md: "32px" }}
    spacing={{ xs: "16px", sm: "32px", md: "48px" }}>

      {/* Card Proposal/Governance */}
      <Grid container item xs={12} sm={4}>
        <Box my={5}  p={2}>
          <Paper
            sx={{
              height: "13rem",
              width: { xs: "16rem", md: "22rem" },
              borderRadius: "18px"
            }}
            elevation={2}
            // className="eth-card white-glassmorphism"
          >
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
              sx={{
                height: "13rem",
                width: { xs: "16rem", md: "22rem" },
              }}
              p={2}
            >
              <Grid
                container
                item
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                sx={{
                  flexGrow: 1,
                }}
              >
                <Grid item>
                  <Box
                    sx={{
                      width: "2.5rem",
                      height: "2.5rem",
                      borderRadius: "50%",
                      border: 1,
                      borderColor: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <InfoOutlinedIcon color="primary" />
                  </Box>
                </Grid>
                <Grid item>
                  <InfoOutlinedIcon color="primary" />
                </Grid>
              </Grid>
              <Grid item>
                <Typography
                  color="primary"
                  fontWeight="300"
                  sx={{
                    fontSize: "0.875rem",
                    lineHeight: "1.25rem",
                  }}
                >
                  {!currentAccount ? (
                    <>Address</>
                  ) : (
                    <>{shortenAddress(currentAccount)}</>
                  )}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  color="primary.text"
                  fontWeight="600"
                  sx={{
                    fontSize: "1.125rem",
                    lineHeight: "1.75rem",
                  }}
                  mt={1}
                >
                  Ropsten Testnet
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      {/* Proposal details */}
      <Grid container item xs={12} sm={8}>
        <ContractDetails 
          title="SVToken Contract Details"
          data={[
            {
              field: "Contract name",
              info: "SVToken",
            },
            {
              field: "Contract address",
              info: "0x4CB362dAb257aEF8C80e25B93EaDDA34e471809c",
            },
            {
              field: "Total suply",
              info: "1",
            },
            {
              field: "Balance Of",
              info: "1",
              button: "enviar",
              buttonFunction: "Put your address to know your balance"
            },
            {
              field: "Token URI",
              info: "0x4CB362dAb257aEF8C80e25B93EaDDA34e471809c",
              button: "enviar",
              buttonFunction: "Put your TokenId to know your the Token URI"
            },
            {
              field: "Total suply",
              info: "1",
              button: "enviar",
              buttonFunction: "Put your address to your balance"
            }
          ]}
        />
      </Grid>
      {/* Proposal post */}
      <Grid container item xs={12}>
      {/* AdBanner Mobile tablet*/}
      <Grid item xs={12}>
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
      </Grid>
      <Divider />
        <Grid
          container
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={{ xs: 2, md: 5 }}
          p={{ xs: "8px", sm: "16px", md: "32px" }}
        >
          {/* Title */}
          <Grid item>
            <Skeleton animation="wave" height={56} width="100%" />

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
                Autor:
              </Typography>

              <Skeleton animation="wave" height={14} width="15%" />
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
      </Grid>
    </Grid>
  )
}
