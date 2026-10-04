import type { MapNode, Trace } from "../types.js";

const KEYS = [
  "status",
  "money",
  "relationships",
  "ideology",
  "novelty",
  "work",
  "story_public",
  "story_private",
] as const;

export function buildMap(traces: Trace[]): MapNode[] {
  const consented = traces.filter((t) => t.consent);
  return KEYS.map((source) => {
    const n = consented.filter((t) => t.summary.includes(source)).length;
    return {
      source,
      weight: n,
      circular: n > 8 && n % 2 === 0,
      empty: n === 0,
    };
  });
}
