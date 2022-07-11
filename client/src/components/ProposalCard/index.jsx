import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Grid, Skeleton, Chip } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import {shortenAddress} from "../../utils/shortenAddress"

function ProposalCard({data}) {
  const [elevation, setElevation] = useState(3);

  const [ proposalId, setProposalId ] = useState('');
  const [ linkToToken, setLinkToToken ] = useState("/blockchain/ProposalInfo/:proposalId");
  const [ proposalState, setProposalState ] = useState(0);
  const [ tokenAddress, setTokenAddress ] = useState();
  const [ transferCalldata, setTransferCalldata ] = useState(
    <>
      <Skeleton height="22px" width="100%" />
      <Skeleton height="22px" width="100%" />
      <Skeleton height="22px" width="100%" />
    </>
  );
  const [ description, setDescription ] = useState();
  const [ proposer, setProposer ] = useState();
  const [ startBlock, setStartBlock ] = useState();

  const [ chipColor, selChipColor ] = useState("success");
  const [ chiplabel, setChiplabel ] = useState("Success");


  useEffect(() => {
    try {
      if (data) {
        setProposalId(data.proposalId)
        setLinkToToken(`/blockchain/ProposalInfo/:${data.proposalId}`)
        setProposalState(data.proposalState)
        setTokenAddress(data.tokenAddress)
        setTransferCalldata(data.transferCalldata)
        setDescription(data.description)
        setProposer(data.proposer)
        setStartBlock(data.startBlock)
      } 

      if (data.proposalState === 0) {
        selChipColor("success")
        setChiplabel("Success")
      } else if (data.proposalState === 1){
        selChipColor("primary")
        setChiplabel("Ongoing")
      } else {
      selChipColor("error")
      setChiplabel("Rejected")
    }

    } catch (error) {
      console.log("No data found")
    }
  }, [data])

  return (
    <>
      <Link to={linkToToken}
            state={{
              proposalId: proposalId,
              proposalState: proposalState,
              tokenAddress: tokenAddress,
              transferCalldata: transferCalldata,
              description: description,
              proposer: proposer,
              startBlock: startBlock 
            }}
            >
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
                    <Typography variant="h3" color="primary.10" 
                    sx={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 1,
                    }}
                    >
                      {shortenAddress(`${transferCalldata}`)}
                    </Typography>
                  </Grid>
                  {/* Proposer address */}
                  <Grid item xs={9}>
                    <Typography variant="underline2" >
                        Proposer: {shortenAddress(`${proposer}`)}
                    </Typography>
                  </Grid>
                  {/* Proposal state */}
                  <Grid item xs={3}>
                    <Chip variant="outlined" size="small" color={chipColor} icon={<FiberManualRecordIcon />} label={chiplabel} />
                  </Grid>

                </Grid>
              </CardContent>
        </Card>
      </Link>
    </>
  );
}

export default ProposalCard;

