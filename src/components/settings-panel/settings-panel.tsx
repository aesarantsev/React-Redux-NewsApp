import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { StoreStructure } from "../../entities/StoreStructure";
import { setPageSizeToState } from "../../actions";

interface SettingsPanelType {
  pageSize: number;
  setQuertyToState: (pageSize: number) => void;
}

export class SettingsPanel extends Component<SettingsPanelType> {
  render() {
    return (
      <form noValidate>
        <TextField
          id="number-of-loaded-items-input"
          label="Number of loaded items"
          variant="outlined"
          value={this.props.pageSize.toString()}
          onChange={event => this.props.setQuertyToState(+event.target.value)}
        />
      </form>
    );
  }
}

const mapStateToProps = ({
  articleList: {
    articlesQuertyParams: { pageSize }
  }
}: StoreStructure): any => {
  return { pageSize };
};

const mapDispatchToProps = (dispatch: any, { articleService }: any) => {
  return {
    setQuertyToState: setPageSizeToState(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
