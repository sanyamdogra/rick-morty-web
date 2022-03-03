import React from "react";
import { render, screen } from "@testing-library/react";
import Listing from "..";

test("renders rick and morty heading", () => {
  render(<Listing />);
  const heading = screen.getByText(/Rick and morty/i);
  expect(heading).toBeInTheDocument();
});
