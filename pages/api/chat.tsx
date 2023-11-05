import type { NextApiRequest, NextApiResponse } from 'next';

const generators = {};
import {openAiChatBot} from "../../lib/chatbot";
import {ChatBotContext} from "../../lib/chatbot/chatBot";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { requestid: requestid } = req.query;
  if (req.method != "POST") {
    // FIXME: nextjs에서 데코레이터 등으로 처리할 수 있는 기능 찾기
    res.status(405);
    return;
  }
  // XXX: 적절한 validation으로 변환
  if (typeof requestid != "string"){
    return res.status(400).json("`requestid`should exist in query and type of requestid should be string.");
  }
  if (typeof generators[requestid] == "undefined") {
    const { message } = req.body;
    if (typeof message != "string"){
      return res.status(400).json("There should be `message` in body in first request.");
    }
    generators[requestid] = await buildGenerator(message);
  }
  const generator = generators[requestid];
  return res.status(200).json(await generator.next());
}

async function buildGenerator(message) {
  const ctx: ChatBotContext = {
    titleOfArtWork: "theStarryNight"
  };
  return await openAiChatBot.chat(
    ctx,
    message,
  );
}
