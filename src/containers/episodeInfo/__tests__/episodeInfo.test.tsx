import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  screen,
  waitFor,
} from "@testing-library/react";

import EpisodeInfo from "..";

import { DUMMY_EPISODE } from "../../../common/dummyData";
import { mockFetchResponse } from "../../../common/utils";

afterEach(cleanup);

test("renders the correct episode info", async () => {
  const handleClose = jest.fn();

  mockFetchResponse(DUMMY_EPISODE);

  render(<EpisodeInfo show={true} handleClose={handleClose} episodes={[1]} />);

  await waitFor(() => {
    expect(screen.getByTestId("card-field-value")).toHaveTextContent(
      "1 chapters"
    );
  });

  expect(screen.getAllByTestId("episode-name")).toHaveLength(1);

  fireEvent.click(screen.getByTestId("modal-close-btn"));
  expect(handleClose).toHaveBeenCalledTimes(1);
});
