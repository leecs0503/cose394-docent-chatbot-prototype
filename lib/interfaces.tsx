export interface Place {
  id: number;
  name: string;
  description: string;
};

export interface ArtWork {
  id: number;
  placeId: number;
  name: string;
  summary: string;
  description: string;
};

export interface Path {
  id: number;
  placeId: number;
  name: string;
};

export interface PathPoint {
  id: number;
  pathId: number;
  x: number;
  y: number;
};

