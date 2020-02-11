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
  totalArticles: number;
  page: number;
  pageSize: number;
  loadMoreArticles: (page: number) => void;
}

const ArticleList = ({
  items,
  loadMoreArticles,
  totalArticles,
  page,
  pageSize
}: IArticleListProps) => {
  return (
    <InfiniteScroll
      pageStart={1}
      hasMore={page * pageSize < totalArticles || page===1? true : false}
      useWindow={true}
      loadMore={loadMoreArticles}
      loader={<div key={1}>Loading data...</div>}
      //initialLoad={true}
    >
      {items}
    </InfiniteScroll>
  );
};

interface IArticleListContainerProps {
  articles: Article[];
  totalArticles: number;
  q: string;
  pageSize: number;
  page: number;
  from: string;
  to: string;
  error: string;
  fetchArticles: (
    query: string,
    pageSize: number,
    page: number,
    from: string,
    to: string
  ) => void;
}

class ArticleListContainer extends Component<IArticleListContainerProps> {
  componentDidMount(){
    //this.getPageNews()(1);
  }
  getArticleListItems = (): JSX.Element[] => {
    let res: JSX.Element[] = [];
    this.props.articles.map(function(item,id) {
      res.push(<ArticleListItem article={item} key={id} />);
    });

    return res;
  };

  getPageNews() {
    return (page: number) => {
      console.log("page", this.props.page);
      this.props.fetchArticles(
        this.props.q,
        this.props.pageSize,
        this.props.page,
        this.props.from,
        this.props.to
      );
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
        totalArticles={this.props.totalArticles}
        page={this.props.page}
        pageSize={this.props.pageSize}
      />
    );
  }
}

const mapStateToProps = ({
  articleList: {
    articles,
    totalArticles,
    articlesQuertyParams: { q, pageSize, page, from, to },
    error
  }
}: StoreStructure): any => {
  return { articles, totalArticles, q, pageSize, page, from, to, error };
};

const mapDispatchToProps = (dispatch: any, { articleService }: any) => {
  return {
    fetchArticles: fetchArticles(articleService, dispatch)
  };
};

export default withBookstoreService(
  connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer)
);
