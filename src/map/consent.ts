import type { Trace } from "../types.js";

export function onlyConsented(traces: Trace[]): Trace[] {
  return traces.filter((t) => t.consent);
}
