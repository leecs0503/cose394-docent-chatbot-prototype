import {Place, ArtWork, Path, PathPoint} from "../interfaces";

import {BaseDB} from "./db";

export class DBHandler {
    constructor(private db: BaseDB) {}
    async getPlace(): Promise<Place[]> {
        return [{
            id: 1,
            name: "123",
            description: "123",
        }];
    }

    async getArtWork(): Promise<ArtWork[]> {
        return [{
            id: 1,
            placeId: 1,
            name: "123",
            summary: "123",
            description: "123",
        }];
    }

    async getPath(): Promise<Path[]> {
        return [{
            id: 123,
            placeId: 123,
            name: "123",
        }];
    }

    async getPathPoint(): Promise<PathPoint[]> {
        return [{
            id: 123,
            pathId: 123,
            x: 123,
            y: 123,
        }];
    }
};