import React from "react";
import CardField from "../cardField";

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
      <div className={`${rootClassName}__heading`}>{props.locationName}</div>
      {props.loading && <>Fetching location info ...</>}
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
