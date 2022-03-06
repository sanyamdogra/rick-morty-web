import React from "react";

import { Character } from "../../models/common/types";
import CharacterCard from "../characterCard";
import Loader from "../loader";

import "./styles.scss";

const rootClassName = "rick-morty-character-listing";

interface Props {
  characterList: Character[] | null;
  isLoading: boolean;
}

const CharacterListing = (props: Props) => {
  return (
    <div className={rootClassName}>
      {!props.isLoading &&
        props.characterList?.map((character, idx) => (
          <CharacterCard character={character} key={idx} />
        ))}
      {props.isLoading && (
        <Loader testId="character-list-loader">Loading Characters ...</Loader>
      )}
    </div>
  );
};

export default CharacterListing;
