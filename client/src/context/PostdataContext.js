import React, { useState, useEffect } from "react";
import Axios from "axios";

export const PostdataContext = React.createContext();

export const PostdataContextProvider = ({ children }) => {
  const [articleCollection, setArticleCollection] = useState([]);
  const [newsCollection, setNewsCollection] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPostsArticles").then((response) => {
      setArticleCollection(response.data);
    });
    Axios.get("http://localhost:3001/getPostsNews").then((response) => {
      setNewsCollection(response.data);
    });
  }, []);

  return (
    <PostdataContext.Provider
      value={{
        //States:
        articleCollection,
        newsCollection,
        //Functions:
      }}
    >
      {children}
    </PostdataContext.Provider>
  );
};
