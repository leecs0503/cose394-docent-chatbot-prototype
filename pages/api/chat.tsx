import type { NextApiRequest, NextApiResponse } from 'next';

import {openAiChatBot} from "../../lib/chatbot";
import {ChatBotContext} from "../../lib/chatbot/chatBot";

const generators = {};

async function postHandler(
  req: NextApiRequest,
  res: NextApiResponse,
){
  const { requestid } = req.query;
  
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


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method != "POST") {
    return res.status(405);
  }
  return await postHandler(req, res);
}
