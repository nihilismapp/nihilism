export function shouldExpire(expiresAt: string | undefined, now = new Date()): boolean {
  if (!expiresAt) return false;
  return new Date(expiresAt) <= now;
}
