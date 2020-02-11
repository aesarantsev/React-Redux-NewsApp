import React, { Component } from "react";
import { connect } from "react-redux";

import { TextField } from "@material-ui/core";

import { setQuertyToState } from "../../actions";
import { setFromDateToState, setToDateToState } from "../../actions";
import { StoreStructure } from "../../entities/StoreStructure";
import { ISOdateToDatepickerFormat } from "../../utils/date-service";

import "./article-filter.css";

interface ArticleFilterType {
  from: string;
  fromDateOnChange: (event: string) => void;
  to: string;
  toDateOnChange: (event: string) => void;
}

class ArticleFilter extends Component<ArticleFilterType> {
  render() {
    let { from, to } = this.props;
    let dateFrom = ISOdateToDatepickerFormat(from);
    let dateTo = ISOdateToDatepickerFormat(to);

    return (
      <form>
        <TextField
          id="dateFromInput"
          label="Date from"
          type="date"
          defaultValue={dateFrom}
          onChange={event => this.props.fromDateOnChange(event.target.value)}
          InputLabelProps={{
            shrink: true
          }}
        />
        <TextField
          id="dateToInput"
          label="Date to"
          type="date"
          defaultValue={dateTo}
          onChange={event => this.props.toDateOnChange(event.target.value)}
          InputLabelProps={{
            shrink: true
          }}
        />
      </form>
    );
  }
}

interface IArticleFilterContainerProps {
  from: string;
  setFromDateToState: (FromDate: string) => void;
  to: string;
  setToDateToState: (toDate: string) => void;

}

export class ArticleFilterContainer extends Component<
  IArticleFilterContainerProps
> {
  toDateChange() {
    return (toDate: string) => {
      this.props.setToDateToState(toDate);
    };
  }

  fromDateChange() {
    return (fromDate: string) => {
      this.props.setFromDateToState(fromDate);
    };
  }

  render() {
    const { from, to } = this.props;
    return (
      <ArticleFilter
        from={from}
        to={to}
        fromDateOnChange={this.fromDateChange()}
        toDateOnChange={this.toDateChange()}
      />
    );
  }
}

const mapStateToProps = ({
  articleList: {
    articlesQuertyParams: { from, to }
  }
}: StoreStructure): any => {
  return { from, to };
};

const mapDispatchToProps = (dispatch: any, { articleService }: any) => {
  return {
    setQuertyToState: setQuertyToState(dispatch),
    setFromDateToState: setFromDateToState(dispatch),
    setToDateToState: setToDateToState(dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleFilterContainer);
