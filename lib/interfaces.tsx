interface Place {
  id: number;
  name: string;
  description: string;
};

interface ArtWork {
  id: number;
  place_id: number;
  name: string;
  summary: string;
  description: string;
};

interface Path {
  id: number;
  place_id: number;
  name: string;
};

interface PathPoint {
  id:number;
  path_id:number;
  x:number;
  y:number;
};
