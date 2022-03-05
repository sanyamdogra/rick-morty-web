import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

import { getCharacters } from "../../services";
import { CharacterResponse } from "../../services/types";

import Header from "../../components/header";
import Listing from "../../components/listing";

import "./styles.scss";

const rootClassName = "rick-morty-app";

const App: React.FC = () => {
  const [characterList, setCharacterList] = useState<CharacterResponse | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const pageCount = characterList?.info?.pages ?? pageNumber;

  const fetchCharactersList = async (page: number) => {
    setIsLoading(true);
    const data = await getCharacters(page);
    setCharacterList(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharactersList(pageNumber);
  }, [pageNumber]);

  return (
    <div className={rootClassName}>
      <Header />
      <Listing
        characterList={characterList?.results ?? null}
        isLoading={isLoading}
      />
      {!isLoading && (
        <Pagination
          page={pageNumber}
          count={pageCount}
          className={`${rootClassName}__pagination`}
          onChange={(_, count) => setPageNumber(count)}
        />
      )}
    </div>
  );
};

export default App;
