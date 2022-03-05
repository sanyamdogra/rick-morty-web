import React, { useState } from "react";

import CardField from "../cardField";
import StatusIndicator from "../statusIndicator";
import LocationInfo from "../../containers/locationInfo";
import EpisodeInfo from "../../containers/episodeInfo";

import { getEpisodeParams } from "../../common/utils";
import { Character } from "../../models/common/types";

import "./styles.scss";

const rootClassName = "rick-morty-character-card";
interface Props {
  character: Character;
}

const CharacterCard = (props: Props) => {
  const [isLocationOpen, setIsLocationOpen] = useState<boolean>(false);
  const [episodeInfoOpen, setEpisodeInfoOpen] = useState<boolean>(false);

  const episodes = getEpisodeParams(props.character.episode);

  return (
    <div className={rootClassName}>
      {isLocationOpen && (
        <LocationInfo
          handleClose={() => setIsLocationOpen(false)}
          show={isLocationOpen}
          character={props.character}
        />
      )}
      {episodeInfoOpen && (
        <EpisodeInfo
          handleClose={() => setEpisodeInfoOpen(false)}
          show={episodeInfoOpen}
          episodes={episodes}
        />
      )}
      <div className={`${rootClassName}__image-wrapper`}>
        <img src={props.character.image} alt={props.character.name} />
      </div>
      <div className={`${rootClassName}__details`}>
        <div className={`${rootClassName}__name`}>{props.character.name}</div>
        <div className={`${rootClassName}__value`}>
          <StatusIndicator status={props.character.status} />
          {props.character.species}
        </div>
        <CardField label="Origin" value={props.character.origin.name} />
        <CardField
          label="Last location"
          value={props.character.location.name}
          title="Click for more info on location"
          onClick={() => setIsLocationOpen(true)}
        />
        <CardField
          label="Appears on"
          value={`${props.character.episode.length} chapters`}
          title="Click for more info on episodes"
          onClick={() => setEpisodeInfoOpen(true)}
        />
      </div>
    </div>
  );
};

export default CharacterCard;
