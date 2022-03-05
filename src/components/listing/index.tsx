import React from "react";

import CharacterListing from "../../components/characterListing";
import { CharacterResponse } from "../../services/types";

import "./styles.scss";

const rootClassName = "rick-morty-listing";

interface Props {
  characterList: CharacterResponse | null;
  isLoading: boolean;
}

const Listing: React.FC<Props> = ({ characterList, isLoading }) => {
  return (
    <div className={rootClassName}>
      <CharacterListing characterList={characterList} isLoading={isLoading} />
    </div>
  );
};

export default Listing;
