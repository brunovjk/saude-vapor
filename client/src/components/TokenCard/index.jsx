import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, Grid, Skeleton } from "@mui/material";

function TokenCard(props) {
  const [elevation, setElevation] = useState(3);

  return (
    <>
      <Link to="/blockchain/TokenInfo/:tokenId">
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
                  {/* tokenId */}
                  <Grid item xs={6}>
                    <Typography variant="underline2"  >
                        <Skeleton height="16px" width="100%" />
                    </Typography>
                  </Grid>
                  {/* language */}
                  <Grid item xs={6}>
                    <Typography variant="underline2" >
                        <Skeleton height="16px" width="100%" />
                    </Typography>
                  </Grid>
                  {/* title */}
                  <Grid item xs={12}>
                    <Typography variant="h3" color="primary.10" >
                        <Skeleton height="22px" width="100%" />
                        <Skeleton height="22px" width="100%" />
                        <Skeleton height="22px" width="100%" />

                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
        </Card>
      </Link>
    </>
  );
}

export default TokenCard;

