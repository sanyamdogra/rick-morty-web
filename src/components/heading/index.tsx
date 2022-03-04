import React from "react";

import "./styles.scss";

interface Props {
  primary: string;
  secondary?: string;
}

const rootClassName = "rick-morty-heading";

const Heading: React.FC<Props> = ({ primary, secondary }) => {
  return (
    <h1 className={rootClassName}>
      {primary}
      {secondary && (
        <span className={`${rootClassName}__secondary`}>{secondary}</span>
      )}
    </h1>
  );
};

export default Heading;
