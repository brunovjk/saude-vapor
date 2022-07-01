import React from 'react'
import {  Grid } from "@mui/material";
import ProposalEditor from "./ProposalEditor"
import ProposalList from "./ProposalList"
import { Typography } from "@mui/material";

export default function SVGovernanceSection() {
  
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      p={{ xs: "24px", sm: "32px" , md: "64px"}}
      spacing={{ xs: "32px", sm: "48px" , md: "64px"}}
>
      {/* Title */}
      <Grid item xs={12}>
        <Typography variant="h3" color="primary.text">Proposals</Typography>
      </Grid>
      {/* Latest proposals */}
      <Grid item xs={12} sm={5}>
        <ProposalList />
      </Grid>
      {/* Proposal editor */}
      <Grid item xs={12} sm={7}>
        <ProposalEditor />
      </Grid>
    </Grid>
  )
}
