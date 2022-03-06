import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Modal from "..";

afterEach(cleanup);

test("clicking on cross calls the handleClose", () => {
  const handleClose = jest.fn();

  const { asFragment } = render(
    <Modal show={true} handleClose={handleClose}>
      <div>Test Content</div>
    </Modal>
  );

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(screen.getByTestId("modal-close-btn"));

  expect(handleClose).toHaveBeenCalledTimes(1);
});

test("setting the show to false", () => {
  const handleClose = jest.fn();

  render(
    <Modal show={false} handleClose={handleClose}>
      <div>Test Content</div>
    </Modal>
  );

  expect(screen.getByTestId("modal-body")).toHaveAttribute(
    "class",
    "rick-morty-modal rick-morty-modal--none"
  );
});
