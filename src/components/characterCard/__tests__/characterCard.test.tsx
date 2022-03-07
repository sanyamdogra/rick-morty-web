import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
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

test("clicking on the last location should open/close episode modal", () => {
  render(<CharacterCard character={DUMMY_CHARACTER} />);

  fireEvent.click(screen.getByText("Citadel of Ricks"));

  expect(screen.getByTestId("modal-body")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("modal-close-btn"));

  expect(screen.queryByTestId("modal-body")).toBeNull();
});

test("clicking on the appears on should open/close location modal", () => {
  render(<CharacterCard character={DUMMY_CHARACTER} />);

  fireEvent.click(screen.getByText("2 chapters"));

  expect(screen.getByTestId("modal-body")).toBeInTheDocument();

  fireEvent.click(screen.getByTestId("modal-close-btn"));

  expect(screen.queryByTestId("modal-body")).toBeNull();
});
