import React from "react";

import "./styles.scss";

type Props = {
  status: string;
};

const rootClassName = "rick-morty-status-indicator";

const StatusIndicator = (props: Props) => {
  const iconStatus = props.status.toLocaleLowerCase();

  return (
    <div
      className={`${rootClassName} ${rootClassName}--${iconStatus}`}
      title={props.status}
    />
  );
};

export default StatusIndicator;
