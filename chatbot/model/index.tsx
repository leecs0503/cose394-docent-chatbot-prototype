export interface Model {
  predict(input: any[]): AsyncGenerator<string, void, unknown>;
}
