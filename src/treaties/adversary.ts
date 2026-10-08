import type { Treaty, Trace } from "../types.js";

export function argue(treaty: Treaty, traces: Trace[]): string {
  const hits = traces.filter((t) => t.consent && !t.summary.includes(treaty.body.slice(0, 12)));
  if (!hits.length) return "no behavioral contradiction in the consented traces";
  return `treaty claims ${treaty.body.slice(0, 80)}; ${hits.length} traces do not`;
}

// no scrape
