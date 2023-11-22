import { PollyResponseType } from "./types";

export const textToSpeech = async (text: string) => {
  const result = await fetch(`${process.env.POLLY_API_URL}`, {
    method: "POST",
    headers: {
      "x-api-key": `${process.env.API_POLLY_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
    }),
  });
  return JSON.parse((await result.json()).body) as PollyResponseType;
};
