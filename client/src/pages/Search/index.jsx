import React, { useState, useEffect, useContext } from "react";
import DataSearch from "./DataSearch";
import SkeletonSearch from "./SkeletonSearch";

import { db } from "../../context/firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { Context } from "../../context/Context";

export default function Search() {
  const { selectedLanguage } = useContext(Context);

  const [dataExist, setDataExist] = useState(false);
  const [collectionData, setCollectionData] = useState([]);

  const getCollection = async () => {
    try {
      const q = await getDocs(
        collection(db, "postsBlog", selectedLanguage, "posts")
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
