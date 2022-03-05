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
  return (
    <>
      <div className={`${rootClassName}__label`}>{props.label}</div>
      <div
        className={`${rootClassName}__value`}
        onClick={props.onClick}
        title={props.title}
      >
        {props.value}
      </div>
    </>
  );
};

export default CardField;
