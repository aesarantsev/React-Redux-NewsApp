import React, { Component } from "react";
import { connect } from "react-redux";

import ArticleListItem from "../article-list-item";

import withBookstoreService from "../hoc";
import { fetchArticles } from "../../actions";
import { Article } from "../../entities/Article";

import "./article-list.css";
import { articleListType, StoreStructure } from "../../entities/StoreStructure";

interface IArticleListProps {
  articles: Article[];
}

const ArticleList = ({ articles }: IArticleListProps) => {
  return (
    <ul className="article-list">
      {articles.map(item => {
        return <li key={item.id}>{<ArticleListItem article={item} />}</li>;
      })}
    </ul>
  );
};

interface IArticleListContainerProps {
  articles: Article[];
  articlesQuery: string;
  loading: boolean;
  error: string;
  fetchArticles: (query: string) => void;
}

class ArticleListContainer extends Component<IArticleListContainerProps> {
  componentDidMount() {
    this.props.fetchArticles(this.props.articlesQuery);
  }

  render() {
    const { articles, loading, error } = this.props;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error</div>;
    }

    console.log(articles);
    return <ArticleList articles={articles} />;
  }
}

const mapStateToProps = ({
  articleList: { articles, articlesQuery, loading, error }
}: StoreStructure): any => {
  return { articles, articlesQuery, loading, error };
};

const mapDispatchToProps = (dispatch: any, { articleService }: any) => {
  return {
    fetchArticles: fetchArticles(articleService, dispatch)
  };
};

export default withBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer)
);
