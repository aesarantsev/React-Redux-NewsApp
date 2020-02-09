import React, { Component } from "react";
import { connect } from "react-redux";

import InfiniteScroll from "react-infinite-scroller";

import ArticleListItem from "../article-list-item";
import withBookstoreService from "../hoc";
import { fetchArticles } from "../../actions";
import { Article } from "../../entities/Article";
import { StoreStructure } from "../../entities/StoreStructure";

import "./article-list.css";

interface IArticleListProps {
  items: JSX.Element[];
  loadMoreArticles: (page: number) => void;
}

const ArticleList = ({ items, loadMoreArticles }: IArticleListProps) => {
  return (
    <InfiniteScroll
      pageStart={0}
      hasMore={true}
      useWindow={true}
      loadMore={loadMoreArticles}
      loader={<div>Loading data...</div>}
    >
      {items}
    </InfiniteScroll>
  );
};

interface IArticleListContainerProps {
  articles: Article[];
  q: string;
  pageSize: number;
  page: number;
  error: string;
  fetchArticles: (query: string, pageSize: number, page: number) => void;
}

class ArticleListContainer extends Component<IArticleListContainerProps> {
  getArticleListItems = (): JSX.Element[] => {
    let res: JSX.Element[] = [];
    this.props.articles.map(function(item) {
      res.push(<ArticleListItem article={item} />);
    });

    return res;
  };

  getPageNews() {
    return (page: number) => {
      console.log("page", page);
      this.props.fetchArticles(this.props.q, this.props.pageSize, page);
    };
  }

  render() {
    if (this.props.error) {
      return <div>Error</div>;
    }

    return (
      <ArticleList
        items={this.getArticleListItems()}
        loadMoreArticles={this.getPageNews()}
      />
    );
  }
}

const mapStateToProps = ({
  articleList: {
    articles,
    articlesQuertyParams: { q, pageSize, page },
    error
  }
}: StoreStructure): any => {
  return { articles, q, pageSize, page, error };
};

const mapDispatchToProps = (dispatch: any, { articleService }: any) => {
  return {
    fetchArticles: fetchArticles(articleService, dispatch)
  };
};

export default withBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer)
);
