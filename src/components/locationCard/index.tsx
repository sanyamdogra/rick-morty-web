import React from "react";

import CardField from "../cardField";
import Loader from "../loader";

import "./styles.scss";

interface Props {
  locationName: string;
  loading: boolean;
  dimension: string;
  noOfResidents: number;
  type: string;
}

const rootClassName = "rick-morty-loc-card";

const LocationCard = (props: Props) => {
  return (
    <div className={rootClassName}>
      <div
        className={`${rootClassName}__heading`}
        data-testid="location-card-heading"
      >
        {props.locationName}
      </div>
      {props.loading && (
        <div
          className={`${rootClassName}__loader-wrapper`}
          data-testid="loader-wrapper"
        >
          <Loader>Fetching location info ...</Loader>
        </div>
      )}
      {!props.loading && (
        <>
          <CardField label="Dimension" value={props.dimension} />
          <CardField label="No of residents" value={props.noOfResidents} />
          <CardField label="Type" value={props.type} />
        </>
      )}
    </div>
  );
};

export default LocationCard;
