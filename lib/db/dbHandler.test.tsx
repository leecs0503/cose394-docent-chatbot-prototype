import {DBHandler} from "./dbHandler"
import {BaseDB} from "./db"
import {Place, ArtWork, Path, PathPoint} from "../interfaces"

interface DummyDBMockedReturnValue{
  get: any[][]
}

class DummyDB extends BaseDB{
  public callNum = 0;
  public lastSQL = "";
  public lastArgs = [];
  constructor (private mockedReturnValues: DummyDBMockedReturnValue) {super()}

  async get(sql: string, args: any[]) {
    this.callNum += 1;
    this.lastSQL = sql;
    this.lastArgs = args;
    return this.mockedReturnValues.get;
  }
}

describe('DBHandlerWithDummyDBTest', () => {
  it('get_place test', async () => {
    const expectedReturn = [{
      id: 1,
      name: "123",
      description: "123",
    }];
    const expectedCallNum = 1;
    const expectedSQL = "SELECT (id, name, description) from place;";
    const expectedArgs = [];

    const dummyDB = new DummyDB({"get": [[1, "123", "123"]]});
    const dbHandler = new DBHandler(dummyDB);
    const result = await dbHandler.getPlace()
    expect(result).toEqual(expectedReturn);
    expect(dummyDB.callNum).toEqual(expectedCallNum);
    expect(dummyDB.lastSQL).toEqual(expectedSQL);
    expect(dummyDB.lastArgs).toEqual(expectedArgs);
  });
});