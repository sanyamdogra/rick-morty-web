import React from "react";

import "./styles.scss";

interface Props {
  status: string;
}

const rootClassName = "rick-morty-status-indicator";

const StatusIndicator: React.FC<Props> = ({ status }) => {
  const iconStatus = status.toLocaleLowerCase();

  return (
    <div
      className={`${rootClassName} ${rootClassName}--${iconStatus}`}
      title={status}
      data-testid="status-indicator"
    />
  );
};

export default StatusIndicator;
