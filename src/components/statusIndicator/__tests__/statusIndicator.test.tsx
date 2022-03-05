import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import StatusIndicator from "..";

afterEach(cleanup);

test("should match the snapshot and render correct data", () => {
  const { asFragment } = render(<StatusIndicator status="Alive" />);

  expect(asFragment()).toMatchSnapshot();

  const indicator = screen.getByTestId("status-indicator");

  expect(
    indicator.classList.contains("rick-morty-status-indicator--alive")
  ).toBe(true);

  expect(indicator).toHaveAttribute("title", "Alive");
});
