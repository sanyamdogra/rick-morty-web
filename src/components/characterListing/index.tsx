import React from "react";
import { CharacterResponse } from "../../services/types";
import CharacterCard from "../characterCard";

import "./styles.scss";

const rootClassName = "rick-morty-character-listing";

type Props = {
  characterList: CharacterResponse | null;
  isLoading: boolean;
};

const CharacterListing = (props: Props) => {
  return (
    <div className={rootClassName}>
      {!props.isLoading &&
        props.characterList?.results?.map((character, idx) => (
          <CharacterCard character={character} key={idx} />
        ))}
      {props.isLoading && (
        <div className={`${rootClassName}__loader`}>Loading Characters ...</div>
      )}
    </div>
  );
};

export default CharacterListing;
