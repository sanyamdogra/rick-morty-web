import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import LocationCard from "..";

afterEach(cleanup);

test("should match the snapshot and render correct data", () => {
  const { asFragment, rerender } = render(
    <LocationCard
      loading={false}
      locationName={"Test Location Name"}
      dimension={"Test Location Dimension"}
      noOfResidents={7}
      type={"Test Location Type"}
    />
  );

  expect(asFragment()).toMatchSnapshot();

  expect(screen.getByTestId("location-card-heading")).toHaveTextContent(
    "Test Location Name"
  );

  expect(screen.queryByTestId("loader-wrapper")).toBeNull();

  rerender(
    <LocationCard
      loading={true}
      locationName={"Test Location Name"}
      dimension={"Test Location Dimension"}
      noOfResidents={7}
      type={"Test Location Type"}
    />
  );

  expect(screen.getByTestId("loader-wrapper")).toHaveTextContent(
    "Fetching location info ..."
  );

  expect(screen.queryByTestId("card-field-label")).toBeNull();
});
