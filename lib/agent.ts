import { ToolLoopAgent } from "ai";

export const shoppingAgent = new ToolLoopAgent({
  model: "anthropic/claude-sonnet-5",
  instructions: "Respond like a cowboy.",
});