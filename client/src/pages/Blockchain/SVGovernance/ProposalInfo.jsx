import React, { useState, useEffect } from "react";
import { shortenAddress } from "../../../utils/shortenAddress";
import {
  Grid,
  Paper,
  Box,
  Divider,
  Skeleton,
  Typography,
  Chip,
} from "@mui/material";
import { AdBanner, FABSocialMedia } from "../../../components";
import  ContractDetailsSVGovernance  from "./ContractDetailsSVGovernance";
import { useLocation } from "react-router-dom";
import { StickyContainer, Sticky } from "react-sticky";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export default function ProposalInfo() {
  const stateInfo = useLocation().state;

  const [proposalEvent, setProposalEvent] = useState({
    proposalId: <Skeleton animation="wave" height={14} width="100%" />,
    tokenAddress: "",
    transferCalldata: "",
    description: "",
    proposer: <Skeleton animation="wave" height={14} width="100%" />,
    startBlock: "",
  });

  const [chipProposalState, setChipProposalState] = useState({
    color: "success",
    label: "Success",
  });

  useEffect(() => {
    try {
      if (stateInfo) {
        setProposalEvent({
          proposalId: stateInfo.proposalId,
          tokenAddress: stateInfo.tokenAddress,
          transferCalldata: stateInfo.transferCalldata,
          description: stateInfo.description,
          proposer: stateInfo.proposer,
          startBlock: stateInfo.startBlock,
        });
      }

      if (stateInfo.proposalState === 0) {
        setChipProposalState({ color: "success", label: "Success" });
      } else if (stateInfo.proposalState === 1) {
        setChipProposalState({ color: "primary", label: "Ongoing" });
      } else {
        setChipProposalState({ color: "error", label: "Rejected" });
      }
    } catch (error) {
      console.log(error);
    }
  }, [stateInfo]);

  // const transferCalldata = SVToken_Contract.interface.encodeFunctionData("safeMint", [currentAccount, uri]);

  // console.log(proposalEvent.transferCalldata);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
      p={{ xs: "16px", sm: "24px", md: "32px" }}
      spacing={{ xs: "16px", sm: "32px", md: "48px" }}
    >
      {/* Card Proposal/Governance */}
      <Grid container item xs={12} sm={4}>
        <Box>
          <Paper sx={{ borderRadius: "18px", height: "100%" }} elevation={2}>
            <Grid
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="stretch"
              sx={{ height: "100%" }}
              p={2}
            >
              {/* SaudeVapor Governance and Icon */}
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
                {/* SaudeVapor Governance */}
                <Grid item xs={11}>
                  <Typography color="primary.text" variant="h2">
                    SaudeVapor Governance
                  </Typography>
                </Grid>
                {/* Icon */}
                <Grid item xs={1}>
                  <InfoOutlinedIcon color="primary" />
                </Grid>
              </Grid>
              {/* Proposal state and proposal language */}
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                {/* Proposal state*/}
                <Grid
                  container
                  item
                  xs={6}
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="stretch"
                >
                  {/* Proposal state label */}
                  <Grid item sx={{ mt: { xs: "16px", sm: "32px" } }}>
                    <Typography color="primary" variant="underline2">
                      Proposal state:
                    </Typography>
                  </Grid>
                  {/* Proposal state */}
                  <Grid item>
                    <Typography
                      color="primary.text"
                      variant="underline1"
                      sx={{
                        whiteSpace: "unset",
                        wordBreak: "break-all",
                      }}
                    >
                      <Chip
                        variant="outlined"
                        size="small"
                        color={chipProposalState.color}
                        icon={<FiberManualRecordIcon />}
                        label={chipProposalState.label}
                      />
                    </Typography>
                  </Grid>
                </Grid>
                {/* Proposal language */}
                <Grid
                  container
                  item
                  xs={6}
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="stretch"
                >
                  {/* Proposal language label */}
                  <Grid item sx={{ mt: { xs: "16px", sm: "32px" } }}>
                    <Typography color="primary" variant="underline2">
                      Content language:
                    </Typography>
                  </Grid>
                  {/* Proposal language */}
                  <Grid item>
                    <Typography color="primary.text" variant="underline1">
                      English
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* Proposal description label */}
              <Grid item sx={{ mt: { xs: "8px", sm: "16px" } }}>
                <Typography color="primary" variant="underline2">
                  Proposal description:
                </Typography>
              </Grid>
              {/*  Proposal description */}
              <Grid item>
                <Typography
                  color="primary.text"
                  variant="underline1"
                  sx={{
                    whiteSpace: "unset",
                    wordBreak: "break-all",
                  }}
                >
                  {proposalEvent.description}
                </Typography>
              </Grid>
              {/* Proposal ID label */}
              <Grid item sx={{ mt: { xs: "8px", sm: "16px" } }}>
                <Typography color="primary" variant="underline2">
                  Proposal ID:
                </Typography>
              </Grid>
              {/* Proposal ID: */}
              <Grid item>
                <Typography
                  color="primary.text"
                  variant="underline1"
                  sx={{
                    whiteSpace: "unset",
                    wordBreak: "break-all",
                  }}
                >
                  {proposalEvent.proposalId}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
      {/* Proposal details */}
      <Grid container item xs={12} sm={8}>
        <ContractDetailsSVGovernance proposalEvent={proposalEvent}/>
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
        {/* Post */}
        <Grid
          container
          item
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={{ xs: 2, md: 5 }}
          py={{ xs: "8px", sm: "16px", md: "32px" }}
        >
          {/* Title , date, language, author*/}
          <Grid item>
            <Skeleton animation="wave" height={56} width="100%" />

            <Grid
              container
              item
              xs={12}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <Grid
                item
                xs={12}
                sm={1}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Skeleton animation="wave" height={14} width="100%" />
              </Grid>

              <Grid
                item
                xs={12}
                sm={3}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography variant="underline1" color="secondary.text">
                  Language: 
                </Typography>

                <Skeleton animation="wave" height={14} width="100%" />
              </Grid>

              <Grid
                item
                xs={12}
                sm={8}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography variant="underline1" color="secondary.text">
                  Autor: 
                </Typography>

                <Typography variant="underline1" color="secondary.text">
                  {shortenAddress(`${proposalEvent.proposer}`)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          {/* Fab Social Media, text and AdBanner */}
          <Grid item>
            <StickyContainer>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={{ xs: 2, md: 4 }}
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
  );
}
