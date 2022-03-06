import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";

import LocationInfo from "..";

import { DUMMY_CHARACTER, DUMMY_LOCATION } from "../../../common/dummyData";
import { mockFetchResponse } from "../../../common/utils";

afterEach(cleanup);

test("loads stuff", async () => {
  const handleClose = jest.fn();

  mockFetchResponse(DUMMY_LOCATION);

  render(
    <LocationInfo
      show={true}
      handleClose={handleClose}
      character={DUMMY_CHARACTER}
    />
  );

  await waitFor(() => {
    expect(screen.getByTestId("location-card-heading")).toHaveTextContent(
      "Citadel of Ricks"
    );
  });

  fireEvent.click(screen.getByTestId("modal-close-btn"));

  expect(handleClose).toHaveBeenCalledTimes(1);
});
