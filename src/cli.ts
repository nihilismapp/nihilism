import { VoidSurface } from "./void/surface.js";
import { loadConfig } from "./config.js";
import { agentWallet } from "./wallet/tips.js";

export function main() {
  const cfg = loadConfig();
  const v = new VoidSurface();
  console.log(JSON.stringify({ empty: v.isEmpty(), wallet: agentWallet(cfg) }));
}

main();
