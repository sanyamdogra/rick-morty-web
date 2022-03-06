import React from "react";
import { Episode } from "../../models/common/types";
import CardField from "../cardField";
import Loader from "../loader";

import "./styles.scss";

interface Props {
  loading: boolean;
  episodeInfo: Episode[] | Episode | null;
}

const rootClassName = "rick-morty-ep-card";

const EpisodeCard = (props: Props) => {
  let episodeArray = [];

  if (!Array.isArray(props.episodeInfo)) {
    episodeArray.push(props.episodeInfo);
  } else {
    episodeArray = props.episodeInfo;
  }

  return (
    <div className={rootClassName}>
      <div className={`${rootClassName}__heading`}>Chapter list</div>
      {props.loading && (
        <div
          className={`${rootClassName}__loader-wrapper`}
          data-testid="episode-card-loader"
        >
          <Loader>Fetching chapter info ...</Loader>
        </div>
      )}
      {!props.loading && (
        <>
          <CardField
            label="Appears on"
            value={`${episodeArray?.length} chapters`}
          />
          <ul
            className={`${rootClassName}__ep-list`}
            data-testid="episode-list"
          >
            {episodeArray?.map((ep, idx) => (
              <li key={idx} data-testid="episode-name">
                {ep?.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default EpisodeCard;
