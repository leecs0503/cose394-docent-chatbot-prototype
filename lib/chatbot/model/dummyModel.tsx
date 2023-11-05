import {OpenAI} from "openai";

import {Model, QueryRow} from ".";

export class DummyModel implements Model{
  public mocked_data;
  constructor(
  ) {
    this.mocked_data = [
      "가",
      "나",
      "다",
      "라",
      "마",
      "바",
      "사",
      "아",
      "자",
    ];

  }

  async *predict(input: QueryRow[]) {
    for ( const data of this.mocked_data) {
      await new Promise((res) => {setTimeout(res, 1000);});
      yield data;
    }
  }
}
