import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Typography, Card, CardContent, Grid, Skeleton } from "@mui/material";
import { shortenAddress } from "../../utils/shortenAddress";

function TokenCard({ data }) {
  const { t } = useTranslation();
  const [elevation, setElevation] = useState(3);

  if (data) {
    var linkToToken = `/blockchain/TokenInfo/:${data.tokenid}`;
    var addresssender = shortenAddress(data.addresssender);
  }

  return (
    <>
      <Link
        to={data ? linkToToken : "/blockchain/TokenInfo/:tokenId"}
        state={{
          addresssender: data.addresssender,
          tokenid: data.tokenid,
          language: data.uri.Language,
          title: data.uri.Title,
          content: data.uri.Content,
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
              {/* tokenId */}
              <Grid item xs={12}>
                <Typography
                  variant="underline2"
                  color="secondary.text"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                  }}
                >
                  {t("TokenCard.tokenId")}
                  {data ? (
                    data.tokenid
                  ) : (
                    <Skeleton height="16px" width="100%" />
                  )}
                </Typography>
              </Grid>
              {/* Adress sender */}
              <Grid item xs={12}>
                <Typography
                  variant="underline2"
                  color="secondary.text"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1,
                  }}
                >
                  {t("TokenCard.owner")}
                  {data ? (
                    addresssender
                  ) : (
                    <Skeleton height="16px" width="100%" />
                  )}
                </Typography>
              </Grid>
              {/* Token URI */}
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  color="primary.text"
                  sx={{
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 3,
                  }}
                >
                  {data ? (
                    data.uri.Title
                  ) : (
                    <>
                      <Skeleton height="22px" width="100%" />
                      <Skeleton height="22px" width="100%" />
                      <Skeleton height="22px" width="100%" />
                    </>
                  )}
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
