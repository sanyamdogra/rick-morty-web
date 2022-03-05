import { BASE_CHARACTER_API_URL, BASE_EPISODE_API_URL } from "./constants";
import { CharacterResponse, LocationResponse, EpisodeResponse } from "./types";

export const getCharacters = async (
  page?: number
): Promise<CharacterResponse> => {
  try {
    const response = await fetch(`${BASE_CHARACTER_API_URL}?page=${page}`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getLocationInfo = async (
  url: string
): Promise<LocationResponse> => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const getEpisodesInfo = async (
  episodes: number[]
): Promise<EpisodeResponse> => {
  try {
    const response = await fetch(`${BASE_EPISODE_API_URL}/${episodes}`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
