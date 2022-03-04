import React, { useEffect, useState } from "react";

import CharacterListing from "../../components/characterListing";
import { getCharacters } from "../../services";
import { CharacterResponse } from "../../services/types";
import Pagination from "@mui/material/Pagination";

import "./styles.scss";

const rootClassName = "rick-morty-listing";

const Listing: React.FC = () => {
  const [characterList, setCharacterList] = useState<CharacterResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCharactersList = async () => {
    setIsLoading(true);
    const data = await getCharacters();
    setCharacterList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharactersList();
  }, []);

  return (
    <div className={rootClassName}>
      <CharacterListing characterList={characterList} isLoading={isLoading} />
      {!isLoading && (
        <Pagination
          count={10}
          className={`${rootClassName}__pagination`}
          onChange={(_, count) => console.log(count)}
        />
      )}
    </div>
  );
};

export default Listing;
