import {Place, ArtWork, Path, PathPoint} from "../interfaces";

import {BaseDB} from "./db";

export class DBHandler {
    constructor(private db: BaseDB) {}
    async getPlaces(): Promise<Place[]> {
        const sql = "SELECT id, name, description FROM place;";
        const result = await this.db.get(sql, []);
        return result;
    }

    async getArtWorks(placeId: number): Promise<ArtWork[]> {
        const sql = "SELECT id, placeId, name, summary, description FROM artwork WHERE place_id = ?;";
        const args = [placeId];
        const result = await this.db.get(sql, args);
        return result;
    }

    async getPaths(placeId: number): Promise<Path[]> {
        const sql = "SELECT id, placeId, name FROM path WHERE place_id = ?;";
        const args = [placeId];
        const result = await this.db.get(sql, args);
        return result;
    }

    async getPathPoints(pathId: number): Promise<PathPoint[]> {
        const sql = "SELECT id, pathId, x, y FROM path_point WHERE place_id = ?;";
        const args = [pathId];
        const result = await this.db.get(sql, args);
        return result;
    }
};
