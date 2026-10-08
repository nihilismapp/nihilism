export type VoidItem =
  | { kind: "empty" }
  | { kind: "note"; id: string }
  | { kind: "capture"; id: string }
  | { kind: "treaty"; id: string };

export class VoidSurface {
  items: VoidItem[] = [{ kind: "empty" }];

  clear() {
    this.items = [{ kind: "empty" }];
  }

  add(item: Exclude<VoidItem, { kind: "empty" }>) {
    this.items = this.items.filter((i) => i.kind !== "empty");
    this.items.push(item);
  }

  isEmpty() {
    return this.items.length === 1 && this.items[0].kind === "empty";
  }
}

// empty is valid
