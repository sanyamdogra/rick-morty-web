import React from "react";
import { Character } from "../../models/common/types";
import StatusIndicator from "../statusIndicator";

import "./styles.scss";

const rootClassName = "rick-morty-character-card";

type Props = {
  character: Character;
};

const CharacterCard = (props: Props) => {
  console.log(props.character);
  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__image-wrapper`}>
        <img src={props.character.image} alt={props.character.name} />
      </div>
      <div className={`${rootClassName}__details`}>
        <div className={`${rootClassName}__name`}>{props.character.name}</div>
        <div className={`${rootClassName}__value`}>
          <StatusIndicator status={props.character.status} />
          {props.character.species}
        </div>
        <div className={`${rootClassName}__label`}>Origin</div>
        <div className={`${rootClassName}__origin`}>
          {props.character.origin.name}
        </div>
        <div className={`${rootClassName}__label`}>Last location</div>
        <div className={`${rootClassName}__origin`}>
          {props.character.location.name}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
