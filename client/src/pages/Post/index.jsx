import React, { useState, useEffect } from "react";

import DataPost from "./DataPost";
import SkeletonPost from "./SkeletonPost";
import DialogEdit from "./DialogEdit";
import DeleteConfirmation from "./DeleteConfirmation";

import { Alert, Snackbar } from "@mui/material";

import { db } from "../../context/firebase-config";
import { doc, getDoc, deleteDoc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";

export default function Post({ isAuth }) {
  let navigate = useNavigate();
  let blogId = decodeURI(window.location.pathname.split("/").pop());

  const [dataExist, setDataExist] = useState(false);
  const [postData, setPostData] = useState([]);
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      try {
        if (blogId) {
          const docRef = doc(db, "postsBlog", blogId);

          const dataDocRef = await getDoc(docRef);

          setPostData(dataDocRef.data());

          if (dataDocRef.data()) {
            setDataExist(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPost();
  }, [blogId]);

  const handleOpenEdit = async () => {
    setOpen(true);
  };

  const deletePost = async () => {
    try {
      await deleteDoc(doc(db, "postsBlog", blogId));
      setOpenAlert(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // handleClose Alert
  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  return (
    <>
      <DialogEdit
        open={open}
        setOpen={setOpen}
        blogId={blogId}
        postData={postData}
      />
      <DeleteConfirmation
        openDeleteConfirmation={openDeleteConfirmation}
        setOpenDeleteConfirmation={setOpenDeleteConfirmation}
        deletePost={deletePost}
      />
      {dataExist ? (
        <DataPost
          postData={postData}
          handleOpenEdit={handleOpenEdit}
          setOpenDeleteConfirmation={setOpenDeleteConfirmation}
          isAuth={isAuth}
        />
      ) : (
        <SkeletonPost />
      )}
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <Alert
          onClose={handleCloseAlert}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post deletado com sucesso.
        </Alert>
      </Snackbar>
    </>
  );
}
