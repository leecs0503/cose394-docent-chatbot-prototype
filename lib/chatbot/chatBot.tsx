import {Model, QueryRow} from "./model"
import {PROMPTS} from "./prompt"

interface ChatBotContext {
  titleOfArtWork: "theStarryNight"
};

export class ChatBot {
  constructor(
    private model: Model
  ) {}

  async *chat(ctx: ChatBotContext, message: string) {
    const input = this.buildScript(ctx, message);
    for await (const value of this.model.predict(input)) {
      yield value;
    }
  }
  
  private buildScript(ctx: ChatBotContext, message: string): QueryRow[] {
    const {titleOfArtWork} = ctx;
    return [
      ...PROMPTS.prefixPrompt,
      ...PROMPTS.promptsOfArtwork[titleOfArtWork],
      ...PROMPTS.suffixPrompt,
      {role: "user", content: message}
    ];
  }
}
