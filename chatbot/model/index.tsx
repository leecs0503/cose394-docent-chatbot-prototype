export interface QueryRow {
  role: 'system' | 'user' | 'assistant';
  content: string
}

export interface Model {
  predict(input: QueryRow[]): AsyncGenerator<string, void, unknown>;
}
