import React from "react";

import "./styles.scss";

const rootClassName = "rick-morty-loader";

interface Props {
  testId?: string;
}

const Loader: React.FC<Props> = ({ children, testId }) => {
  return (
    <div className={rootClassName} data-testid={testId}>
      {children}
    </div>
  );
};

export default Loader;
