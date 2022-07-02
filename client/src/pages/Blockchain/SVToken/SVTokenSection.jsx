import React from 'react'
import { NavLink } from "react-router-dom";
import { Typography, Grid } from "@mui/material";
import { TokenCard } from "../../../components";

export default function SVTokenSection() {

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      p={{ xs: "24px", sm: "32px" , md: "64px"}}
    >
      {/* Title and text*/}
      <Grid
      container
      item   
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={{ xs: "24px", sm: "32px" , md: "48px"}}
      mb={{ xs: "32px", sm: "48px" , md: "64px"}}
      >
        <Grid item>
          <Typography variant="h3" color="primary.text">Latest token minted</Typography>
        </Grid>
        <Grid item>
          <Typography textAlign="center" variant="body1" color="primary.text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet vel at dolor numquam ratione incidunt, reprehenderit non impedit odit  
            <Typography component={NavLink} to="/blockchain/CollectionInfo/:collectionId" sx={{ cursor: "pointer" }} color="primary"> non impedit odit magnam laboriosam beatae possimus! Nobis.</Typography>
             </Typography>          
        </Grid>
      </Grid>
      {/* Cards */}
      <Grid container item spacing={{ xs: "24px", sm: "32px", md: "48px" }}>
        {Array.from(Array(4).keys()).map((data, index) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <TokenCard data={data}/>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  )
}
