import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import CharacterListing from "..";

import { DUMMY_CHARACTER } from "../../../common/dummyData";

afterEach(cleanup);

const dummyCharArr = [DUMMY_CHARACTER];

test("should match the snapshot and render correct data", () => {
  const { asFragment, rerender } = render(
    <CharacterListing characterList={dummyCharArr} isLoading={true} />
  );

  expect(screen.getByTestId("character-list-loader")).toHaveTextContent(
    "Loading Characters ..."
  );

  rerender(<CharacterListing characterList={dummyCharArr} isLoading={false} />);

  expect(asFragment()).toMatchSnapshot();

  expect(screen.queryByTestId("character-list-loader")).toBeNull();
});
