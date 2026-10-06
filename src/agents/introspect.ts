import type { Treaty, MapNode } from "../types.js";

export function diffTreaties(a: Treaty, b: Treaty): string {
  if (a.body === b.body) return "unchanged";
  return `v${a.version} → v${b.version}`;
}

export function emptySources(nodes: MapNode[]): string[] {
  return nodes.filter((n) => n.empty).map((n) => n.source);
}
