import React from "react";
import Header from "../../components/header";
import Heading from "../../components/heading";
import Listing from "../listing";

import "./styles.scss";

const rootClassName = "rick-morty-app";

const App: React.FC = () => {
  return (
    <div className={rootClassName}>
      <Header />
      <Heading primary="The Rick and Morty" secondary="characters" />
      <Listing />
    </div>
  );
};

export default App;
