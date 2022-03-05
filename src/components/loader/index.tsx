import React from "react";

import "./styles.scss";

const rootClassName = "rick-morty-loader";

const Loader: React.FC = ({ children }) => {
  return <div className={rootClassName}>{children}</div>;
};

export default Loader;
