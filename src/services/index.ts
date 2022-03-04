import { BASE_API_URL } from "./constants";
import { CharacterResponse } from "./types";

export const getCharacters = async (): Promise<CharacterResponse> => {
  try {
    const response = await fetch(`${BASE_API_URL}/character`);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
