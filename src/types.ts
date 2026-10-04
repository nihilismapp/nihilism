export type TraceKind = "calendar" | "note" | "message" | "spend" | "media";

export type MeaningSource =
  | "status"
  | "money"
  | "relationships"
  | "ideology"
  | "novelty"
  | "work"
  | "story_public"
  | "story_private";

export type Reaction = "dot" | "tip" | "silence";

export interface Trace {
  id: string;
  kind: TraceKind;
  at: string;
  consent: boolean;
  summary: string;
}

export interface MapNode {
  source: MeaningSource;
  weight: number;
  circular: boolean;
  empty: boolean;
}

export interface Treaty {
  id: string;
  body: string;
  version: number;
  expiresAt?: string;
}

export interface Capture {
  id: string;
  body: string;
  caption: string;
  expiresAt?: string;
}

export interface AgentTreaty {
  id: string;
  a: string;
  b: string;
  terms: string;
  revocable: boolean;
}
