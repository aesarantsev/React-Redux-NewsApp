import React, { Component } from "react";
import { connect } from "react-redux";

import { TextField, Switch, FormControlLabel } from "@material-ui/core";

import { StoreStructure } from "../../entities/StoreStructure";
import { setPageSizeToState, changeTheme, changeFontSize } from "../../actions";

interface SettingsPanelType {
  pageSize: number;
  darkTheme: boolean;
  fontSize: number;
  setQuertyToState: (pageSize: number) => void;
  changeFontSize: (fontSize: number) => void;
  changeTheme: () => void;
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
        <TextField
          id="font-size-input"
          label="Font size"
          variant="outlined"
          value={this.props.fontSize.toString()}
          onChange={event => this.props.changeFontSize(+event.target.value)}
        />
        <FormControlLabel
          control={
            <Switch
              checked={this.props.darkTheme}
              onChange={this.props.changeTheme}
              value="DarkTheme"
              color="primary"
            />
          }
          label="Dark theme"
        />
      </form>
    );
  }
}

const mapStateToProps = ({
  articleList: {
    articlesQuertyParams: { pageSize }
  },
  uiParams: { darkTheme, fontSize }
}: StoreStructure): any => {
  return { pageSize, darkTheme, fontSize };
};

const mapDispatchToProps = (dispatch: any, { articleService }: any) => {
  return {
    setQuertyToState: setPageSizeToState(dispatch),
    changeTheme: changeTheme(dispatch),
    changeFontSize: changeFontSize(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPanel);
