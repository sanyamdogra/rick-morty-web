import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import CharacterCard from "..";

import { DUMMY_CHARACTER } from "../../../common/dummyData";

afterEach(cleanup);

test("should match the snapshot and render correct data", () => {
  const { asFragment } = render(<CharacterCard character={DUMMY_CHARACTER} />);

  expect(asFragment()).toMatchSnapshot();

  expect(screen.getByTestId("character-card-name")).toHaveTextContent(
    "Rick Sanchez"
  );

  expect(screen.getByTestId("character-card-species")).toHaveTextContent(
    "Human"
  );

  const image = screen.getByTestId("character-card-image");
  expect(image).toHaveAttribute(
    "src",
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  );
  expect(image).toHaveAttribute("alt", "Rick Sanchez");
});
