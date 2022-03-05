import React from "react";

import CharacterListing from "../../components/characterListing";
import { Character } from "../../models/common/types";

import "./styles.scss";

const rootClassName = "rick-morty-listing";

interface Props {
  characterList: Character[] | null;
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
