import { describe, expect, it } from "vitest";

import {
  spinnerImg,
  logoImg,
  notfoundImg,
  errorImg,
} from "§/assets/imgExport.ts";

describe("Testing image imports", () => {
  it("spinnerImg has the correct path", () => {
    expect(spinnerImg).to.exist;
    expect(spinnerImg).to.include(".png");
  });

  it("logoImg has the correct path", () => {
    expect(logoImg).to.exist;
    expect(logoImg).to.include(".png");
  });

  it("notfoundImg has the correct path", () => {
    expect(notfoundImg).to.exist;
    expect(notfoundImg).to.include(".png");
  });

  it("errorImg has the correct path", () => {
    expect(errorImg).to.exist;
    expect(errorImg).to.include(".png");
  });
});
