import React, { useState, useEffect, useContext } from "react";
import DataPost from "./DataPost";
import SkeletonPost from "./SkeletonPost";
import DialogEdit from "./DialogEdit";
import DeleteConfirmation from "./DeleteConfirmation";

import { db } from "../../context/firebase-config";
import { doc, getDoc } from "firebase/firestore";

import { Context } from "../../context/Context";

import { useNavigate } from "react-router-dom";

export default function Post() {
  const { isAuth, selectedLanguage } = useContext(Context);

  let navigate = useNavigate();
  let blogId = decodeURI(window.location.pathname.split("/").pop());

  const [dataExist, setDataExist] = useState(false);
  const [postData, setPostData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        if (blogId) {
          const docRef = doc(db, `postsBlog/${selectedLanguage}/posts`, blogId);

          const dataDocRef = await getDoc(docRef);

          setPostData(dataDocRef.data());

          if (dataDocRef.data() !== undefined) {
            setDataExist(true);
          } else {
            // navigate("/NotFound");
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, [blogId, navigate]);

  const handleOpenEdit = async () => {
    setOpen(true);
  };

  return (
    <>
      {dataExist ? (
        <>
          <DialogEdit
            open={open}
            setOpen={setOpen}
            blogId={blogId}
            postData={postData}
          />
          <DeleteConfirmation
            blogId={blogId}
            openDeleteConfirmation={openDeleteConfirmation}
            setOpenDeleteConfirmation={setOpenDeleteConfirmation}
          />

          <DataPost
            postData={postData}
            handleOpenEdit={handleOpenEdit}
            setOpenDeleteConfirmation={setOpenDeleteConfirmation}
            isAuth={isAuth}
          />
        </>
      ) : (
        <SkeletonPost />
      )}
    </>
  );
}
