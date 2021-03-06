import React, { useContext } from "react";
import { ContractContext } from "../Context";
import { Grid, Paper, Pagination, Typography } from "@mui/material";
import { AdBanner, TokenCard } from "../../../components";
import ContractDetailsSVToken from "./ContractDetailsSVToken";
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
        />
      </Grid>
      {/* Collection details */}
      <Grid container item xs={12} sm={8}>
        <ContractDetailsSVToken />
      </Grid>
      {/* AdBanner container */}
      <Grid item xs={12} sx={{ my: { xs: "16px", sm: "48px" } }}>
        <AdBanner />
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
