import { Character, Episode } from "../models/common/types";

export interface ResponseInfo {
  count: number;
  next: string;
  pages: number;
  prev: string | null;
}

export interface CharacterResponse {
  info: ResponseInfo;
  results: Character[];
}

export interface LocationResponse {
  created: string;
  dimension: string;
  id: number;
  name: string;
  residents: string[];
  type: string;
  url: string;
}

export type EpisodeResponse = Episode[];
