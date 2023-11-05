import {Model, QueryRow} from "./model";
import {PROMPTS} from "./prompt";

export interface ChatBotContext {
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
  
  // FIXME:
  // 실험시 어떤 스크립트로 동작했는지 프론트에 띄우기 위해 public으로 선언
  // private로 변경 필요
  public buildScript(ctx: ChatBotContext, message: string): QueryRow[] {
    const {titleOfArtWork} = ctx;
    return [
      ...PROMPTS.prefixPrompt,
      ...PROMPTS.promptsOfArtwork[titleOfArtWork],
      ...PROMPTS.suffixPrompt,
      {role: "user", content: message}
    ];
  }
}
