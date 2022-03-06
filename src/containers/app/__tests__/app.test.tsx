import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import App from "..";

import { DUMMY_CHARACTER_RESPONSE } from "../../../common/dummyData";
import { mockFetchResponse } from "../../../common/utils";

test("renders rick and morty heading", () => {
  render(<App />);
  const heading = screen.getByText(/Rick and Morty/i);
  expect(heading).toBeInTheDocument();
});

test("renders the correct episode response info", async () => {
  mockFetchResponse(DUMMY_CHARACTER_RESPONSE);

  render(<App />);

  await waitFor(() => {
    expect(screen.getByTestId("character-card-name")).toHaveTextContent(
      "Rick Sanchez"
    );
  });
});
