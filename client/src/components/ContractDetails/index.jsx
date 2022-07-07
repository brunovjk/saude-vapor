import React, { useState } from "react";
import {
  Grid,
  TextField,
  Paper,
  Typography,
  Button,
  Divider,
} from "@mui/material";

export default function ContractDetails(props) {
  const [inputFunction, setInputFunction] = useState(null);

  const handleChangeValues = (value) => {
    setInputFunction(value.target.value);
  };

  return (
    <>
      <Paper elevation={2} sx={{ borderRadius: "18px", width: "100%" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          p={{ xs: "16px", sm: "24px" }}
          spacing="16px"
        >
          <Grid item>
            <Typography
              variant="h3"
              color="priamry.text"
              mb={{ xs: "16px", sm: "24px" }}
            >
              {props.title}
            </Typography>
          </Grid>
          {props.data.map((data, index) => (
            <Grid
              container
              item
              key={index}
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing="16px"
            >
              <Grid item>
                <Typography variant="body1" color="primary.text">
                  {data.nameFunction}:
                </Typography>
              </Grid>
              {data.button && (
                <Grid item>
                  <Button
                    variant={data.gasFee ? "contained" : "outlined"}
                    onClick={() => {
                      data.buttonFunction(data.proposalId, inputFunction);
                    }}
                  >
                    {data.button}
                  </Button>
                </Grid>
              )}
              <Grid item xs>
                <TextField
                  fullWidth={true}
                  disabled={data.button ? false : true}
                  label={data.inicialContent}
                  size="small"
                  id="inputFunction"
                  onChange={handleChangeValues}
                />
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}
