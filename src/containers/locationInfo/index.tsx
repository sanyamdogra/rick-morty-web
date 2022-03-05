import React, { MouseEventHandler, useEffect, useState } from "react";

import { getLocationInfo } from "../../services/";
import { LocationResponse } from "../../services/types";

import LocationCard from "../../components/locationCard";
import Modal from "../../components/modal";
import { Character } from "../../models/common/types";

interface Props {
  show: boolean;
  character: Character;
  handleClose: MouseEventHandler;
}

const LocationInfo = (props: Props) => {
  const [locationInfo, setLocationInfo] = useState<LocationResponse | null>(
    null
  );
  const [locationLoading, setLocationLoading] = useState(false);

  const fetchLocationInfo = async (url: string) => {
    setLocationLoading(true);
    const data = await getLocationInfo(url);
    setLocationInfo(data);
    setLocationLoading(false);
  };

  useEffect(() => {
    fetchLocationInfo(props.character.location.url);
  }, [props.character.location.url]);

  return (
    <Modal handleClose={props.handleClose} show={props.show}>
      <LocationCard
        loading={locationLoading}
        locationName={props.character.location.name}
        dimension={locationInfo?.dimension ?? ""}
        noOfResidents={locationInfo?.residents.length ?? 0}
        type={locationInfo?.type ?? ""}
      />
    </Modal>
  );
};

export default LocationInfo;
