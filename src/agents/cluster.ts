export type Role = "adversary" | "sunny" | "captioner" | "broker" | "mapper";

export interface Agent {
  id: string;
  role: Role;
  killed: boolean;
}

export function kill(a: Agent): Agent {
  return { ...a, killed: true };
}

export function living(agents: Agent[]): Agent[] {
  return agents.filter((a) => !a.killed);
}
