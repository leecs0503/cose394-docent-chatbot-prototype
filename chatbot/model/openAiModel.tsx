import {OpenAI} from "openai"

import {Model, QueryRow} from "."

export class StreamOpenAIModel implements Model{
  private openai: OpenAI
  constructor(
    apiKey: string,
    private modelVersion: string,
  ) {
    this.openai = new OpenAI({apiKey})
  }

  async *predict(input: QueryRow[]) {
    const stream = await this.openai.chat.completions.create({
      model: this.modelVersion,
      messages: input,
      stream: true,
    });
    for await (const part of stream) {
      yield part.choices[0]?.delta?.content || '';
    }
  }
}
