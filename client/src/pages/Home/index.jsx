import React, { useState, useEffect } from "react";
import SkeletonHome from "./SkeletonHome";
import DataHome from "./DataHome";

import Axios from "axios";

export default function Home() {
  const [dataExist, setDataExist] = useState(false);
  const [postCollection, setPostCollection] = useState([]);

  const [hasMore, setHasMore] = useState(true);
  const [totalItens, setTotalItens] = useState(16);

  const dataBannerSlider = postCollection.slice(0, 3); //query in postnews the first to 3º posts
  const dataHorizontalCard = postCollection.slice(3, 7); //query in postnews from 4º to 7º posts

  const dataCardFirstPage = postCollection.slice(0, 12); //query in postarticles starting from the date to 24 + X º posts

  const [dataCardSecondPage, setDataCardSecondPage] = useState(
    postCollection.slice(12, 16)
  ); //query in postarticles the last

  const fetchMoreData = () => {
    const dataToFecth = postCollection.slice(totalItens, totalItens + 8);
    setTotalItens(totalItens + 8);

    const newItens = dataCardSecondPage.concat(dataToFecth);

    if (dataToFecth.length === 0) {
      setHasMore(false);
    }

    setDataCardSecondPage(newItens);
  };
  // const X start 0, increase by 1 every time fetchMoreData is called.

  useEffect(() => {
    Axios.get("http://localhost:3001/getPostcollection").then((response) => {
      setPostCollection(response.data);
    });
  }, []);

  useEffect(() => {
    if (postCollection.length > 0) {
      setDataExist(true);
    }
  }, [postCollection.length]);

  return (
    <>
      {dataExist ? (
        <DataHome
          dataBannerSlider={dataBannerSlider}
          dataHorizontalCard={dataHorizontalCard}
          dataCardFirstPage={dataCardFirstPage}
          dataCardSecondPage={dataCardSecondPage}
          fetchMoreData={fetchMoreData}
          hasMore={hasMore}
        />
      ) : (
        <SkeletonHome />
      )}
    </>
  );
}
