import React, { useContext } from "react";
import { ContractContext } from "../Context";
import { Grid, Paper, Pagination, Typography } from "@mui/material";
import { AdBanner, ContractDetails, TokenCard } from "../../../components";
import accountImg from "../../../assets/img/accountImg.jpg";

export default function CollectionInfo() {
  const { tokenCollection } = useContext(ContractContext);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
      p={{ xs: "16px", sm: "24px", md: "32px" }}
      spacing={{ xs: "16px", sm: "32px", md: "48px" }}
    >
      {/* Image */}
      <Grid container item xs={12} sm={4}>
        <Paper
          sx={{
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: "40px",
            backgroundImage: `url(${accountImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Paper>
      </Grid>
      {/* Collection details */}
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
              buttonFunction: "Put your address to know your balance",
            },
            {
              field: "Token URI",
              info: "0x4CB362dAb257aEF8C80e25B93EaDDA34e471809c",
              button: "enviar",
              buttonFunction: "Put your TokenId to know your the Token URI",
            },
            {
              field: "Total suply",
              info: "1",
              button: "enviar",
              buttonFunction: "Put your address to your balance",
            },
          ]}
        />
      </Grid>
      {/* AdBanner container */}
      <Grid item xs={12} sx={{ my: { xs: "16px", sm: "48px" } }}>
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
      {/* Collection cards */}
      <Grid container item spacing={{ xs: "16px", sm: "32px", md: "48px" }}>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h3" color="primary.text">
            SVToken complete collection
          </Typography>
        </Grid>
        {tokenCollection.map((data, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TokenCard data={data} />
            </Grid>
          );
        })}
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Pagination color="primary" count={10} />
        </Grid>
      </Grid>
    </Grid>
  );
}
