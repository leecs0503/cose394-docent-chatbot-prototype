import {OpenAI} from "openai";

import {Model, QueryRow} from ".";

export class DummyModel implements Model{
  public lastInput;
  constructor(
    public delay = 1000,
    public mockedData = [
      "가", "나", "다", "라", "마", "바", "사", "아", "자",
    ],
  ) {
    this.lastInput = "";
  }

  async *predict(input: QueryRow[]) {
    this.lastInput = input;
    for ( const data of this.mockedData) {
      await new Promise((res) => {setTimeout(res, this.delay);});
      yield data;
    }
  }
}
