import React, { useState, useEffect, useContext } from "react";
import DataSearch from "./DataSearch";
import SkeletonSearch from "./SkeletonSearch";

import { db } from "../../context/firebase-config";
import {
  collection,
  getDocs,
  query,
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
  const currentDate = `${new Date().getFullYear()}-${
    monthsNumber[new Date().getMonth()]
  }-${new Date().getDate()}`;

  const [dataExist, setDataExist] = useState(false);
  const [collectionData, setCollectionData] = useState([]);

  const getCollection = async () => {
    try {
      const q = query(
        collection(db, "postsBlog", `${selectedLanguage}`, "posts"),
        orderBy("docName", "desc"),
        startAt(currentDate)
      );

      const queryAllPosts = await getDocs(q);

      setCollectionData(
        queryAllPosts.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );

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
