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
