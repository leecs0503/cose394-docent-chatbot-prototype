
import { ChatBot, ChatBotContext } from "./chatBot";
import { DummyModel } from "./model/dummyModel";

describe('ChatbotWithDummyModelTest', () => {
  it('chat test', async () => {
    const dummyModel = new DummyModel(100, ["안", "녕"]);
    const chatbot = new ChatBot(dummyModel);
    const dummyCtx: ChatBotContext = {
      titleOfArtWork: "theStarryNight"
    };
    const result = await chatbot.chat(dummyCtx, "test message");
    expect(await result.next()).toEqual({value: "안", done: false});
    expect(await result.next()).toEqual({value: "녕", done: false});
    expect(await result.next()).toEqual({done: true});
    expect(await result.next()).toEqual({done: true});
  });
});
