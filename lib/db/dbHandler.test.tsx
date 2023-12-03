import {BaseDB} from "./db";
import {DBHandler} from "./dbHandler";

import { Place, ArtWork, Path, PathPoint } from "@lib/interfaces";

interface DummyDBMockedReturnValue{
  get: any[][]
}

class DummyDB extends BaseDB{
  public callNum = 0;
  public lastSQL = "";
  public lastArgs = [];
  constructor (private mockedReturnValues: DummyDBMockedReturnValue) {super();}

  async get(sql: string, args: any[]) {
    this.callNum += 1;
    this.lastSQL = sql;
    this.lastArgs = args;
    return this.mockedReturnValues.get;
  }
}

const snake_of = (camel_case: string) => (camel_case.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`));

describe('DBHandlerWithDummyDBTest', () => {
  it('getPlaces test', async () => {
    const expectedReturn: Place[] = [{
      id: 1,
      name: "123",
      description: "456",
    }];
    const expectedCallNum = 1;
    const expectedArgs = [];

    const dummyDB = new DummyDB({"get": [[1, "123", "456"]]});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getPlaces();
    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toContain("SELECT");
    for (const key in expectedReturn[0]) {
      expect(dummyDB.lastSQL).toContain(snake_of(key));
    }
    expect(dummyDB.lastSQL).toContain("FROM");
    expect(dummyDB.lastSQL).toContain("place");
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });

  it('getArtWorks test', async () => {
    const argPlaceId = 2;
    const expectedReturn: ArtWork[] = [{
      id: 1,
      placeId: argPlaceId,
      name: "123",
      summary: "456",
      description: "789",
    }];
    const expectedCallNum = 1;
    const expectedArgs = [argPlaceId];

    const dummyDB = new DummyDB({"get": [[1, argPlaceId, "123", "456", "789"]]});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getArtWorks(argPlaceId);

    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toContain("SELECT");
    for (const key in expectedReturn[0]) {
      expect(dummyDB.lastSQL).toContain(snake_of(key));
    }
    expect(dummyDB.lastSQL).toContain("FROM");
    expect(dummyDB.lastSQL).toContain("art_work");
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });

  it('getPaths test', async () => {
    const argPlaceId = 2;
    const expectedReturn: Path[] = [{
      id: 1,
      placeId: argPlaceId,
      name: "123",
      description: "가가가",
    }];
    const expectedCallNum = 1;
    const expectedArgs = [argPlaceId];

    const dummyDB = new DummyDB({"get": [[1, argPlaceId, "123", "가가가"]]});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getPaths(argPlaceId);

    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toContain("SELECT");
    for (const key in expectedReturn[0]) {
      expect(dummyDB.lastSQL).toContain(snake_of(key));
    }
    expect(dummyDB.lastSQL).toContain("FROM");
    expect(dummyDB.lastSQL).toContain("path");
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });

  it('getPathPoints test', async () => {
    const argPathId = 2;
    const expectedReturn: PathPoint[] = [{
      id: 1,
      pathId: argPathId,
      x: 3,
      y: 4,
    }];
    const expectedCallNum = 1;
    const expectedArgs = [argPathId];

    const dummyDB = new DummyDB({"get": [[1, argPathId, 3, 4]]});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getPathPoints(argPathId);

    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toContain("SELECT");
    for (const key in expectedReturn[0]) {
      expect(dummyDB.lastSQL).toContain(snake_of(key));
    }
    expect(dummyDB.lastSQL).toContain("FROM");
    expect(dummyDB.lastSQL).toContain("path_point");
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });
});
