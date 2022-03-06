import React, { MouseEventHandler } from "react";

import "./styles.scss";

interface Props {
  label: string;
  value: string | number;
  title?: string;
  onClick?: MouseEventHandler;
}

const rootClassName = "rick-morty-card-field";

const CardField: React.FC<Props> = (props: Props) => {
  const checkIfClickable = props.onClick ? "invert" : "none";

  return (
    <>
      <div className={`${rootClassName}__label`} data-testid="card-field-label">
        {props.label}
      </div>
      <div
        className={`${rootClassName}__value ${rootClassName}__value--${checkIfClickable}`}
        onClick={props.onClick}
        title={props.title}
        data-testid="card-field-value"
      >
        {props.value}
      </div>
    </>
  );
};

export default CardField;
