import { CharacterResponse, LocationResponse } from "../../services/types";

export interface NameLoc {
  name: string;
  url: string;
}

export interface Character {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: NameLoc;
  name: string;
  origin: NameLoc;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface Episode {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}

export type MockData =
  | Character
  | CharacterResponse
  | Episode
  | LocationResponse;
