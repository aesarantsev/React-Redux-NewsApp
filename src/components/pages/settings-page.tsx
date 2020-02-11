import React from "react";

import Container from "@material-ui/core/Container";
import SettingsPanel from "../settings-panel";

const SettingsPage = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <SettingsPanel />
      </Container>
    </React.Fragment>
  );
};

export default SettingsPage;
