import React, { useState, useEffect } from "react";

import DataPost from "./DataPost";
import SkeletonPost from "./SkeletonPost";

import { db } from "../../context/firebase-config";
import { getDoc, doc } from "firebase/firestore";

export default function Post() {
  let blogId = decodeURI(window.location.pathname.split("/").pop());

  const [dataExist, setDataExist] = useState(false);
  const [postData, setPostData] = useState([]);

  const getPost = async () => {
    try {
      if (blogId) {
        const docRef = doc(db, "postsBlog", blogId);

        const dataDocRef = await getDoc(docRef);

        setPostData(dataDocRef.data());
        setDataExist(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  return <>{dataExist ? <DataPost postData={postData} /> : <SkeletonPost />}</>;
}
