export interface Policy {
  maxTip: number;
  killable: boolean;
}

export function defaultPolicy(): Policy {
  return { maxTip: 50, killable: true };
}

// unkilled agent is a religion
