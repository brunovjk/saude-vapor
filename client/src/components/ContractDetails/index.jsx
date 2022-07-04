import React from 'react'
import {
    Grid,
    TextField,  
    Paper,
    Typography,
    Button,
    Tooltip,
    Divider
  } from "@mui/material";

export default function ContractDetails(props) {
  return (
    <>
      <Paper elevation={2} sx={{ borderRadius: "18px", width:"100%"}}>
        <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        p={{ xs: "16px", sm: "24px"}}
        spacing={{ xs: "16px",}}>
            <Grid item>
              <Typography variant='h3' color="priamry.text" mb={{ xs: "16px", sm: "24px"}}>
                {props.title}
              </Typography>
            </Grid>              
            {props.data.map((data, index) => (
                <Grid 
                container
                item
                key={index}
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: "16px"}}>
                    <Grid item xs={data.button ? 9 : 12} sm={data.button ? 3 : 4} >
                      <Tooltip disableHoverListener title={data.button ? data.buttonFunction : ""} placement="bottom-start" arrow>
                        <TextField fullWidth={true} disabled={data.button ? false : true} label={data.field} size="small"/>
                      </Tooltip>
                    </Grid>
                    {data.button && (
                    <Grid item xs={3} sm={2}>
                      <Button fullWidth={true} variant="outlined">{data.button}</Button>
                    </Grid>
                    )}
                    <Grid item xs={12} sm={data.button ? 7 : 8}>
                        <TextField fullWidth={true} disabled label={data.info} size="small"/>
                    </Grid>
                    <Grid item xs={12}>
                      <Divider/>
                    </Grid>
                </Grid>
            ))}          
        </Grid>
      </Paper>
    </>
  )
}
