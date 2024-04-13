import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../Components/Reusable/Header/Header";
import Footer from "../../Components/Reusable/Footer/Footer";
import Main from "../../Components/Pages/Article/Main/Main";
import axios from "axios";
import { useSelector } from "react-redux";
import _ from "lodash";

export default function Article() {
  const [article, setArticle] = useState({});
  const { articles } = useSelector((state) => state.client);
  const { articleName } = useParams();

  useEffect(() => {
    setArticle(
      _.filter(articles, (article) => {
        return article.to.split('/')[2] === articleName
      })
    );
    console.log(article)
  }, [articles, articleName]);

  return (
    <>
      <Header />
      <Main data={article}/>
      <Footer />
    </>
  );
}
