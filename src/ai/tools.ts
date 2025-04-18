import { linearClient } from "@/config/linear-client";
import { tool } from "ai";
import { z } from "zod";
const weatherTool = tool({
  description: "Get the weather for a given location",
  parameters: z.object({
    location: z.string().describe("The location to get the weather for"),
  }),
  execute: async ({ location }) => {
    const temperature = Math.floor(Math.random() * 100);
    return {
      location,
      temperature,
    };
  },
});

const linearIssuesTool = tool({
  description: "Get the issues assigned to the user.",
  parameters: z.object({
    userId: z.string().describe("The ID of the user, it can be me or any user"),
  }),
  execute: async ({ userId }) => {
    const me = await linearClient.viewer;
    const issues = await me.assignedIssues();
    return issues.nodes;
  },
});

export const tools = {
  weather: weatherTool,
  linearIssues: linearIssuesTool,
  // Add more tools here as needed
};
