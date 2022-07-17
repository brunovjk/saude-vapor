import React, { useState, useEffect, useContext } from "react";
import DataSearch from "./DataSearch";
import SkeletonSearch from "./SkeletonSearch";

import { db } from "../../context/firebase-config";
import {
  collection,
  query,
  getDocs,
  orderBy,
  startAt,
} from "firebase/firestore";

import { Context } from "../../context/Context";

export default function Search() {
  const { selectedLanguage } = useContext(Context);
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
  const [dataExist, setDataExist] = useState(false);
  const [collectionData, setCollectionData] = useState([]);
  const currentDate = `${new Date().getFullYear()}-${
    monthsNumber[new Date().getMonth()]
  }-${new Date().getDate() + 1}`;

  const getCollection = async () => {
    try {
      const q = await getDocs(
        query(
          collection(db, "postsBlog", selectedLanguage, "posts"),
          orderBy("docName", "desc"),
          startAt(currentDate)
        )
      );

      setCollectionData(q.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      setDataExist(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCollection();
  }, []);

  return (
    <>
      {dataExist ? (
        <DataSearch collectionData={collectionData} />
      ) : (
        <SkeletonSearch />
      )}
    </>
  );
}
