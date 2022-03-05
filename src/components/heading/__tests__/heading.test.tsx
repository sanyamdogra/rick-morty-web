import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import Heading from "..";

afterEach(cleanup);

test("should match the snapshot and render correct data", () => {
  const { asFragment } = render(
    <Heading primary="test-primary" secondary="test-secondary" />
  );

  expect(asFragment()).toMatchSnapshot();

  expect(screen.getByTestId("heading-primary")).toHaveTextContent(
    "test-primary"
  );

  expect(screen.getByTestId("heading-secondary")).toHaveTextContent(
    "test-secondary"
  );
});

test("should render correct data without secondary data", () => {
  render(<Heading primary="test-primary" />);

  expect(screen.getByTestId("heading-primary")).toHaveTextContent(
    "test-primary"
  );

  expect(screen.queryByTestId("heading-secondary")).toBeNull();
});
