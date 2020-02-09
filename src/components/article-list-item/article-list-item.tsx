import React from "react";

import Button from "@material-ui/core/Button";

import { Article } from "../../entities/Article";

import "./article-list-item.css";

interface IArticleListItemProps {
  article: Article;
}

const ArticleListItem = ({ article }: IArticleListItemProps) => {
 
  return (
    <div className="article-list-item">
      <h1 className="article-list-item__header">{article.title}</h1>
      <span className="article-list-item__published-at">
        {article.publishedAt}
      </span>
      <div className="article-list-item__img">
        <img src={article.urlToImage} alt="without image"></img>
      </div>
      <div className="article-list-item__description">
        <span>{article.description}</span>
      </div>
      <Button variant="contained" color="primary">
        Подробнее
      </Button>
    </div>
  );
};

export default ArticleListItem;
