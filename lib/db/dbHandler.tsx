import {Place, ArtWork, Path, PathPoint} from "../interfaces";

import {BaseDB} from "./db";

export class DBHandler {
    constructor(private db: BaseDB) {}
    async getPlaces(): Promise<Place[]> {
        const sql = "SELECT id, name, description FROM place;";
        const result = await this.db.get(sql, []);
        return result.map(([id, name, description]) => ({id, name, description}));
    }

    async getArtWorks(placeId: number): Promise<ArtWork[]> {
        const sql = "SELECT id, place_id, name, summary, description FROM art_work WHERE place_id = ?;";
        const args = [placeId];
        const result = await this.db.get(sql, args);
        return result.map(([id, placeId, name, summary, description]) => ({id, placeId, name, summary, description}));
    }

    async getPaths(placeId: number): Promise<Path[]> {
        const sql = "SELECT id, place_id, name, description FROM path WHERE place_id = ?;";
        const args = [placeId];
        const result = await this.db.get(sql, args);
        return result.map(([id, placeId, name, description]) => ({id, placeId, name, description}));
    }

    async getPathPoints(pathId: number): Promise<PathPoint[]> {
        const sql = "SELECT id, path_id, x, y FROM path_point WHERE path_id = ?;";
        const args = [pathId];
        const result = await this.db.get(sql, args);
        return result.map(([id, pathId, x, y])=>({id, pathId, x, y}));
    }
};
