import React from "react";

import "./styles.scss";

const rootClassName = "rick-morty-header";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={rootClassName}>
      <img src={require("../../icons/logo2.png")} alt="Rick and Morty" />
      <div>Source code</div>
    </header>
  );
};

export default Header;
