import React, { useState, useContext } from 'react'
import { ContractContext } from "../../Context";
import {  Grid, Paper, Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Skeleton, Box, Snackbar, Alert,} from "@mui/material";
import { EditorContainerComp } from "../../../../components";

export default function ProposalEditor() {
    const { currentAccount, SVToken_Contract, SVGovernance_Contract } = useContext(ContractContext);

    const [uriTitle, setUriTitle] = useState();
    const [language, setLanguage] = useState("English");
    const [uri, setUri] = useState();

    const [loadingPropose, setLoadingPropose] = useState(false);
    const [successPropose, setSuccessPropose] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const handleChangeTitle = (event) => {
        setUriTitle(event.target.value);
    };
    const handleChangeLanguage = (event) => {
        setLanguage(event.target.value);
    };
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setOpenAlert(false);
    };

    const handlePropose = async (event) => {
        event.preventDefault();
        setLoadingPropose(true);
    
        // Start uploading propose
        if (
            uriTitle &&
            language &&
            uri
        ) {
    
        try {
            // Create proposal
            console.log("---------Creating a proposal")
            const transferCalldata = SVToken_Contract.interface.encodeFunctionData("safeMint", [currentAccount, uri]);
            const description = `Create a token to: ${currentAccount}, for contribuition of: ${uriTitle}`
            const proposeTX = await SVGovernance_Contract.propose(
              [SVToken_Contract.address],
              [0],
              [transferCalldata],
              description,
            )
            await proposeTX.wait(1);
            const data = await proposeTX.wait(1);

            console.log(data)
    
            setLoadingPropose(false);
            setSuccessPropose(true);

            setTimeout(() => {
                // Propose sended, refresh page
                setSuccessPropose(false);
            }, 2000);
        } catch (err) {
        console.log(err);
        }
        } else {
            setAlertMessage("Nao foi possivel ciar sua proposta.")
            setLoadingPropose(false);
            setOpenAlert(true);
        }
    };

return (
    <>
        <Box component="form" onSubmit={handlePropose}>
            <Paper elevation={3} sx={{ borderRadius: "18px", mt: {xs: "16px", md: "0px"} }}>
                <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="stretch"
                p={{ xs: "8px", sm: "16px"}}
                spacing={{ xs: "32px", sm: "32px"}}>
                    {/* Title and text */}
                    <Grid   
                    container
                    item
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    mt="-24px" // Material UI add 16px Top when using spacing
                    >
                        <Grid item>
                            <Typography p="0px 8px 8px 8px">
                                <Skeleton height="22px" width="70%" />
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography p="8px">
                                <Skeleton height="16px" width="100%" />
                                <Skeleton height="16px" width="100%" />
                            </Typography>
                        </Grid>                
                    </Grid>
                    {/* Input and editor */}
                    <Grid   
                    container
                    item
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={{ xs: "8px", sm: "16px"}}>
                        <Grid item xs={8}>
                        <TextField
                            required
                            fullWidth={true}
                            name="title"
                            label="Titulo"
                            variant="outlined"
                            size="small"
                            onChange={handleChangeTitle}
                        />
                        </Grid>
                        <Grid item xs={4}>
                        <FormControl fullWidth={true} size="small">
                            <InputLabel >Idioma</InputLabel>
                            <Select
                            labelId="language-select-label"
                            name="language"
                            value={language}
                            label="Idioma"
                            onChange={handleChangeLanguage}
                            >
                            <MenuItem value={"Portugues"}>Portugues</MenuItem>
                            <MenuItem value={"English"}>English</MenuItem>
                            </Select>
                        </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                        <EditorContainerComp setText={setUri}/>
                        </Grid>
                    </Grid> 
                    {/* Button */}
                    <Grid item
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    p={{ xs: "8px", sm: "16px"}}
                    >
                        <Button
                        type="submit"
                        variant={successPropose ? "outlined" : "contained"}
                        color={successPropose ? "success" : "primary"}
                        disabled={loadingPropose}
                        sx={{ minWidth: "180px" }}
                        >
                            {successPropose ? "Proposta Criado" : "Enviar proposta"}
                        </Button>
                    </Grid>    
                </Grid>
                {/* Alert */}
                <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                    {alertMessage}
                    </Alert>
                </Snackbar>
            </Paper>
        </Box>
    </>
  )
}
