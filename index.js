import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPEN_AI_KEY });

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "what is the capital city of kenya" }],
    model: "gpt-3.5-turbo",
  });

  console.log(chatCompletion);
}
main();
