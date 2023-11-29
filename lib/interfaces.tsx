export interface Place {
  id: number;
  name: string;
  description: string;
};

export interface ArtWork {
  id: number;
  place_id: number;
  name: string;
  summary: string;
  description: string;
};

export interface Path {
  id: number;
  place_id: number;
  name: string;
};

export interface PathPoint {
  id: number;
  path_id: number;
  x: number;
  y: number;
};

