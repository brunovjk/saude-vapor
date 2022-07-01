import React from 'react'
import {  Grid, Paper, Button, TextField, FormControl, InputLabel, Select, MenuItem, Typography, Skeleton } from "@mui/material";
import { EditorContainerComp } from "../../../../components";

export default function ProposalEditor() {
  return (
    <>
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
                mt="-24px" // Material UI add 16px Top when useing spacing
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
                        // onChange={handleChangeTitle}
                    />
                    </Grid>
                    <Grid item xs={4}>
                    <FormControl required fullWidth={true}>
                        <InputLabel >Idioma</InputLabel>
                        <Select
                        labelId="language-select-label"
                        name="language"
                        // value={language}
                        label="Idioma"
                        // onChange={handleChangeCategory}
                        >
                        <MenuItem value={"Portugues"}>Portugues</MenuItem>
                        <MenuItem value={"English"}>English</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                    <EditorContainerComp />
                    </Grid>
                </Grid> 
                {/* Button */}
                <Grid item
                display="flex"
                justifyContent="center"
                alignItems="center"
                p={{ xs: "8px", sm: "16px"}}
                >
                    <Button>Enviar proposta</Button>
                </Grid>    
            </Grid>
        </Paper>
    </>
  )
}
