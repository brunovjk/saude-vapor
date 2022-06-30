import React, { useContext } from "react";
import { ContractContext} from "./Context";
import { Typography, Grid, Button } from "@mui/material";

export default function ConnectWallet() {
    const { connectWallet } = useContext(ContractContext);

    return (
        <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{height: "320px"}}
        >
            <Grid item>
                <Typography align="center" variant="h2">
                Please Connect to your Wallet to see the Latest Collections
                </Typography>
            </Grid>
            <Grid item>
                <Button onClick={connectWallet}>Connect</Button>
            </Grid>

        </Grid>
    );
}
