import React, { useContext } from "react";
import { ContractContext} from "./Context";
import { useTranslation } from "react-i18next";

import { Typography, Grid, Button } from "@mui/material";

export default function ConnectWallet() {
    const { connectWallet } = useContext(ContractContext);
    const { t } = useTranslation();

    return (
        <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        sx={{height: "320px"}}
        p={{ xs: "16px", sm: "32x", md: "48px" }}
        >
            <Grid item>
                <Typography align="center" variant="h2">
                {t("Blockchain.connectWallet.text")}
                </Typography>
            </Grid>
            <Grid item>
                <Button onClick={connectWallet}>{t("Blockchain.connectWallet.button")}</Button>
            </Grid>

        </Grid>
    );
}
