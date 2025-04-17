import { ollama } from "@/config/ollama";
import { streamText } from "ai";
// import { z } from "zod";
export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: ollama("gemma3:1b"),
    messages: messages,
    // tools: {
    //   weather: tool({
    //     description: "Get the weather for a given location",
    //     parameters: z.object({
    //       location: z.string().describe("The location to get the weather for"),
    //     }),
    //     execute: async ({ location }) => {
    //       const temperature = Math.floor(Math.random() * 100);
    //       return {
    //         location,
    //         temperature,
    //       };
    //     },
    //   }),
    // },
  });

  return result.toDataStreamResponse();
}
