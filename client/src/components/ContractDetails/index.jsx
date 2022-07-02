import React from 'react'
import {
    Grid,
    TextField,  
    Paper,
    Typography,
    Button,
    Tooltip
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
                    <Grid item xs={data.button ? 3 : 4}>
                      <Tooltip disableHoverListener title={data.buttonFunction} placement="bottom-start" arrow>
                        <TextField fullWidth disabled={data.button ? false : true} label={data.field} size="small"/>
                      </Tooltip>
                    </Grid>
                    {data.button && (
                    <Grid item xs={2}>
                      <Button fullWidth variant="outlined">{data.button}</Button>
                    </Grid>
                    )}
                    <Grid item xs={data.button ? 7 : 8}>
                        <TextField fullWidth disabled label={data.info} size="small"/>
                    </Grid>
                </Grid>
            ))}          
        </Grid>
      </Paper>
    </>
  )
}
