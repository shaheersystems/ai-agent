import { google } from "@/config/google";
// import { ollama } from "@/config/ollama";
import { streamText, tool } from "ai";
// import {Gemin}
import { tools } from "@/ai/tools";
export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-1.5-flash"),
    messages: messages,
    tools,
  });

  return result.toDataStreamResponse();
}
