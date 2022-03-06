import { Character, Episode } from "../models/common/types";
import { CharacterResponse, LocationResponse } from "../services/types";

export const DUMMY_CHARACTER: Character = {
  created: "2017-11-04T18:48:46.250Z",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  gender: "Male",
  id: 1,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  location: {
    name: "Citadel of Ricks",
    url: "https://rickandmortyapi.com/api/location/3",
  },
  name: "Rick Sanchez",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  species: "Human",
  status: "Alive",
  type: "",
  url: "https://rickandmortyapi.com/api/character/1",
};

export const DUMMY_EPISODES: Episode[] = [
  {
    air_date: "December 2, 2013",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    created: "2017-11-10T12:56:33.798Z",
    episode: "S01E01",
    id: 1,
    name: "Pilot",
    url: "https://rickandmortyapi.com/api/episode/1",
  },
  {
    air_date: "December 2, 2013",
    characters: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    created: "2017-11-10T12:56:33.798Z",
    episode: "S01E01",
    id: 1,
    name: "Pilot",
    url: "https://rickandmortyapi.com/api/episode/1",
  },
];

export const DUMMY_EPISODE: Episode = {
  air_date: "December 2, 2013",
  characters: [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
  ],
  created: "2017-11-10T12:56:33.798Z",
  episode: "S01E01",
  id: 1,
  name: "Pilot",
  url: "https://rickandmortyapi.com/api/episode/1",
};

export const DUMMY_LOCATION: LocationResponse = {
  created: "2017-11-10T13:08:13.191Z",
  dimension: "unknown",
  id: 3,
  name: "Citadel of Ricks",
  residents: [
    "https://rickandmortyapi.com/api/character/8",
    "https://rickandmortyapi.com/api/character/14",
  ],
  type: "Space station",
  url: "https://rickandmortyapi.com/api/location/3",
};

export const DUMMY_CHARACTER_RESPONSE: CharacterResponse = {
  info: {
    count: 826,
    next: "https://rickandmortyapi.com/api/character?page=2",
    pages: 42,
    prev: null,
  },
  results: [DUMMY_CHARACTER],
};
