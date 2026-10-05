import type { Reaction } from "../types.js";

export function react(r: Reaction): Reaction {
  return r;
}

export function countSilence(reactions: Reaction[]): number {
  return reactions.filter((r) => r === "silence").length;
}
