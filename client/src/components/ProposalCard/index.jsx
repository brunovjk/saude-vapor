import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Grid, Skeleton, Chip } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {shortenAddress} from "../../utils/shortenAddress"

function ProposalCard(props) {
  const [elevation, setElevation] = useState(3);
  const address = "0x4CB362dAb257aEF8C80e25B93EaDDA34e471809c"

  return (
    <>
      <Link to="/blockchain/ProposalInfo/:proposaId">
        <Card
          elevation={elevation}
          sx={{
            cursor: "pointer",
            "&:hover": {
              opacity: [1, 1, 0.9],
            },
            p: "8px",
            borderRadius: "18px",
          }}
          onMouseEnter={() => setElevation(1)}
          onMouseLeave={() => setElevation(3)}
        >
              <CardContent>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  {/* title */}
                  <Grid item xs={12}>
                    <Typography variant="h3" color="primary.10" >
                        <Skeleton height="22px" width="100%" />
                        <Skeleton height="22px" width="100%" />
                        <Skeleton height="22px" width="100%" />
                    </Typography>
                  </Grid>
                  {/* Proposer address */}
                  <Grid item xs={9}>
                    <Typography variant="underline2">
                        Proposer: {shortenAddress(address)}
                    </Typography>
                  </Grid>
                  {/* Proposal state */}
                  <Grid item xs={3}>
                    <Chip variant="outlined" size="small" color="success" icon={<FiberManualRecordIcon />} label="Sucess" />
                  </Grid>

                </Grid>
              </CardContent>
        </Card>
      </Link>
    </>
  );
}

export default ProposalCard;

