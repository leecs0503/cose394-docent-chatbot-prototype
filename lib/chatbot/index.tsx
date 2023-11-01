import {ChatBot} from "./chatBot"
import { StreamOpenAIModel } from "./model/openAiModel" 
import {OPENAI_API_KEY, OPENAI_MODEL_VERSION} from "../constants"

const openAiModel = new StreamOpenAIModel(OPENAI_API_KEY,OPENAI_MODEL_VERSION,)

// FIXME: 전역 변수 사용 (error prone한 상황)
// ->
// 적절히 루트에 해당되는 서버 클래스를 구성하고, context에 composition으로 가져가는 것이 옳을 듯
// nextjs에서 구현법을 모르는 상황
export const openAiChatBot = new ChatBot(openAiModel)
