import React, { useState, useEffect, useContext } from "react";
import SkeletonHome from "./SkeletonHome";
import DataHome from "./DataHome";

import { db } from "../../context/firebase-config";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAt,
  where,
} from "firebase/firestore";
import { Context } from "../../context/Context";

export default function Home() {
  const { selectedLanguage } = useContext(Context);

  const [dataExist, setDataExist] = useState(false);
  const [noticiaQueryData, setNoticiaQueryData] = useState([]);
  const [artigoQueryData, setArtigoQueryData] = useState([]);

  const [infinityScrollNumber, setInfinityScrollNumber] = useState(0);

  let monthsNumber = [
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
    "12",
  ];

  const currentDate = `${new Date().getFullYear()}-${
    monthsNumber[new Date().getMonth()]
  }-${new Date().getDate() + 1}`;

  useEffect(() => {
    const getCollection = async () => {
      try {
        const qNoticia = query(
          collection(db, "postsBlog", `${selectedLanguage}`, "posts"),
          where("category", "==", "news"),
          orderBy("docName", "desc"),
          limit(7)
        );

        const qArtigos = query(
          collection(db, "postsBlog", `${selectedLanguage}`, "posts"),
          where("category", "==", "articles"),
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
      } catch (error) {
        console.log(error);
      }
    };
    getCollection();
  }, [currentDate, infinityScrollNumber, selectedLanguage]);

  useEffect(() => {
    if (noticiaQueryData.length > 0) {
      setDataExist(true);
    }
  }, [noticiaQueryData.length]);

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
