import {BaseDB} from "./db";
import {DBHandler} from "./dbHandler";

interface DummyDBMockedReturnValue{
  get: any[]
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

describe('DBHandlerWithDummyDBTest', () => {
  it('getPlaces test', async () => {
    const expectedReturn = [{
      id: 1,
      name: "123",
      description: "456",
    }];
    const expectedCallNum = 1;
    const expectedArgs = [];

    const dummyDB = new DummyDB({"get": expectedReturn});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getPlaces();
    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toContain("SELECT");
    for (const key in expectedReturn[0]) {
      expect(dummyDB.lastSQL).toContain(key);
    }
    expect(dummyDB.lastSQL).toContain("FROM");
    expect(dummyDB.lastSQL).toContain("place");
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });

  it('getArtWorks test', async () => {
    const expectedReturn = [{
      id: 1,
      placeId: 2,
      name: "123",
      summary: "456",
      description: "789",
    }];
    const expectedCallNum = 1;
    const expectedArgs = [66];

    const dummyDB = new DummyDB({"get": expectedReturn});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getArtWorks(66);

    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toContain("SELECT");
    for (const key in expectedReturn[0]) {
      expect(dummyDB.lastSQL).toContain(key);
    }
    expect(dummyDB.lastSQL).toContain("FROM");
    expect(dummyDB.lastSQL).toContain("artwork");
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });

  it('getPaths test', async () => {
    const expectedReturn = [{
      id: 1,
      placeId: 2,
      name: "123",
    }];
    const expectedCallNum = 1;
    const expectedArgs = [66];

    const dummyDB = new DummyDB({"get": expectedReturn});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getPaths(66);

    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toContain("SELECT");
    for (const key in expectedReturn[0]) {
      expect(dummyDB.lastSQL).toContain(key);
    }
    expect(dummyDB.lastSQL).toContain("FROM");
    expect(dummyDB.lastSQL).toContain("path");
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });

  it('getPathPoints test', async () => {
    const expectedReturn = [{
      id: 1,
      placeId: 2,
      x: 3,
      y: 4,
    }];
    const expectedCallNum = 1;
    const expectedArgs = [66];

    const dummyDB = new DummyDB({"get": expectedReturn});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getPathPoints(66);

    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toContain("SELECT");
    for (const key in expectedReturn[0]) {
      expect(dummyDB.lastSQL).toContain(key);
    }
    expect(dummyDB.lastSQL).toContain("FROM");
    expect(dummyDB.lastSQL).toContain("path_point");
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });
});
