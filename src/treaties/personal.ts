import type { Treaty } from "../types.js";

export function nextVersion(t: Treaty, body: string, expiresAt?: string): Treaty {
  return { ...t, body, version: t.version + 1, expiresAt };
}

export function expired(t: Treaty, now = new Date()): boolean {
  if (!t.expiresAt) return false;
  return new Date(t.expiresAt) <= now;
}
