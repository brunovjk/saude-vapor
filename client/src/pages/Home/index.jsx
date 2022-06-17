import React, { useState, useEffect } from "react";
import SkeletonHome from "./SkeletonHome";
import DataHome from "./DataHome";

import { db } from "../../context/firebase-config";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs,
  startAt,
} from "firebase/firestore";

export default function Home() {
  const [dataExist, setDataExist] = useState(false);
  const [noticiaQueryData, setNoticiaQueryData] = useState([]);
  const [artigoQueryData, setArtigoQueryData] = useState([]);

  const [infinityScrollNumber, setInfinityScrollNumber] = useState(0);

  let months = [
    "Mes",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "10",
  ];

  const currentDate = `${new Date().getFullYear()}-${
    months[new Date().getMonth() + 1]
  }-${new Date().getDate() + 3}`;

  const getCollection = async () => {
    try {
      const qNoticia = query(
        collection(db, "postsBlog"),
        where("category", "==", "Noticias"),
        orderBy("docName", "desc"),
        limit(7)
      );

      const qArtigos = query(
        collection(db, "postsBlog"),
        where("category", "==", "Artigos"),
        orderBy("docName", "desc"),
        startAt(currentDate),
        limit(infinityScrollNumber + 12)
      );

      const queryNoticias = await getDocs(qNoticia);
      const queryNArtigos = await getDocs(qArtigos);

      setNoticiaQueryData(
        queryNoticias.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setArtigoQueryData(
        queryNArtigos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

      setDataExist(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollection();
  }, [infinityScrollNumber]);

  return (
    <>
      {dataExist ? (
        <DataHome
          infinityScrollNumber={infinityScrollNumber}
          noticiaQueryData={noticiaQueryData}
          artigoQueryData={artigoQueryData}
          setInfinityScrollNumber={setInfinityScrollNumber}
        />
      ) : (
        <SkeletonHome />
      )}
    </>
  );
}
