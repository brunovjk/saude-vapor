import React from 'react'
import {  Grid } from "@mui/material";
import { ProposalCard  } from "../../../../components";

export default function ProposalList() {
  return (
    <>
      <Grid  
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch" 
        spacing={{ xs: "24px", sm: "32px" }}
        >
          {Array.from(Array(4).keys()).map((data, index) => {
            return (
              <Grid item xs={12} key={index}>
                <ProposalCard data={data}/>
              </Grid>
            );
          })}
      </Grid>
    </>
  )
}
