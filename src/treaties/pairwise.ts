import type { AgentTreaty } from "../types.js";

export function broker(a: string, b: string, terms: string): AgentTreaty {
  return {
    id: crypto.randomUUID(),
    a,
    b,
    terms,
    revocable: true,
  };
}

// no UN for chatbots
