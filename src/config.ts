import { z } from "zod";

const schema = z.object({
  NIHILISM_MODE: z.enum(["void", "map", "social"]).default("void"),
  NIHILISM_AGENT_WALLET: z
    .string()
    .default("8eHXwXbK5XaBH2G3zYyMHpfivdmkN9MjjTNFNX7iC45f"),
  NIHILISM_SUNNY: z.coerce.boolean().default(false),
  NIHILISM_ONDEVICE: z.coerce.boolean().default(true),
});

export type NihilismConfig = z.infer<typeof schema>;

export function loadConfig(env: NodeJS.ProcessEnv = process.env): NihilismConfig {
  return schema.parse(env);
}
