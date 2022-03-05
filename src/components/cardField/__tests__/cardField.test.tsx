import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import CardField from "..";

afterEach(cleanup);

test("should match the snapshot and render correct data", () => {
  const { asFragment } = render(
    <CardField label="test-label" value="test-value" />
  );

  expect(asFragment()).toMatchSnapshot();

  expect(screen.getByTestId("card-field-label")).toHaveTextContent(
    "test-label"
  );

  expect(screen.getByTestId("card-field-value")).toHaveTextContent(
    "test-value"
  );
});
