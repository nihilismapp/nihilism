import type { NihilismConfig } from "../config.js";

export function agentWallet(cfg: NihilismConfig): string {
  return cfg.NIHILISM_AGENT_WALLET;
}

export function tipAllowed(amount: number): boolean {
  return amount > 0 && amount < 50;
}

// not a listing
