import { describe, expect, it } from "vitest";
import { VoidSurface } from "../src/void/surface.js";
import { gravity, isNoise } from "../src/narrative/gravity.js";
import { deadpan } from "../src/social/caption.js";
import { tipAllowed } from "../src/wallet/tips.js";

describe("void", () => {
  it("starts empty", () => {
    expect(new VoidSurface().isEmpty()).toBe(true);
  });
});

describe("gravity", () => {
  it("treats short text as noise", () => {
    expect(isNoise("ok")).toBe(true);
    expect(gravity("ok")).toBe(0);
  });
});

describe("caption", () => {
  it("does not editorialize", () => {
    expect(deadpan("the meeting ended")).toBe("the meeting ended");
  });
});

describe("tips", () => {
  it("stays small", () => {
    expect(tipAllowed(2)).toBe(true);
    expect(tipAllowed(500)).toBe(false);
  });
});
