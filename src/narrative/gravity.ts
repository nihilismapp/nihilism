export function gravity(text: string): number {
  const len = text.trim().length;
  if (len < 12) return 0;
  const repeats = (text.match(/\b(\w+)\b/g) || []).length;
  return Math.min(1, len / 800 + repeats / 400);
}

export function isNoise(text: string): boolean {
  return gravity(text) < 0.08;
}
