import React, { useContext } from 'react'
import { ContractContext } from "../../Context";
import {  Grid } from "@mui/material";
import { ProposalCard  } from "../../../../components";

export default function ProposalList() {
  const { proposalCollection } = useContext(ContractContext);

  return (
    <>
      <Grid  
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch" 
        spacing={{ xs: "24px", sm: "32px" }}
        >
          {proposalCollection.map((data, index) => {
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
