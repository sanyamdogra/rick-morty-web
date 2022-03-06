import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import EpisodeCard from "..";

import { DUMMY_EPISODES, DUMMY_EPISODE } from "../../../common/dummyData";

afterEach(cleanup);

test("should match the snapshot and render correct data", () => {
  const { asFragment } = render(
    <EpisodeCard episodeInfo={DUMMY_EPISODES} loading={false} />
  );

  expect(asFragment()).toMatchSnapshot();

  expect(screen.queryByTestId("episode-card-loader")).toBeNull();

  expect(screen.queryByTestId("card-field-value")).toHaveTextContent(
    "2 chapters"
  );

  expect(screen.getAllByTestId("episode-name")).toHaveLength(2);
});

test("render correct data for single episode object", () => {
  render(<EpisodeCard episodeInfo={DUMMY_EPISODE} loading={false} />);

  expect(screen.queryByTestId("episode-card-loader")).toBeNull();

  expect(screen.queryByTestId("card-field-value")).toHaveTextContent(
    "1 chapters"
  );

  expect(screen.getByTestId("episode-name")).toHaveTextContent("Pilot");
});

test("render correct data for loading state", () => {
  render(<EpisodeCard episodeInfo={DUMMY_EPISODE} loading={true} />);

  expect(screen.getByTestId("episode-card-loader")).toBeInTheDocument();

  expect(screen.queryByTestId("episode-list")).toBeNull();
});
