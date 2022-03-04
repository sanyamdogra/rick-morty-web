import React from "react";
import { render, screen } from "@testing-library/react";
import App from "..";

test("renders rick and morty heading", () => {
  render(<App />);
  const heading = screen.getByText(/The Rick and Morty/i);
  expect(heading).toBeInTheDocument();
});
