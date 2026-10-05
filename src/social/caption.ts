import type { Capture } from "../types.js";

export function deadpan(body: string): string {
  const t = body.trim().replace(/\s+/g, " ");
  if (!t) return "empty";
  return t.length > 90 ? `${t.slice(0, 87)}...` : t;
}

export function makeCapture(body: string, expiresAt?: string): Capture {
  return {
    id: crypto.randomUUID(),
    body,
    caption: deadpan(body),
    expiresAt,
  };
}
