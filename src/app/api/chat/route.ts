import { google } from "@/config/google";
import { streamText } from "ai";
import { tools } from "@/ai/tools";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-1.5-flash"),
    messages: messages,
    system:
      "You are a helpful assistant, who help user to find, manage and summarize day-to-day tasks",
    tools,
    maxSteps: 2,
  });

  return result.toDataStreamResponse();
}
