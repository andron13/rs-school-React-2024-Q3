import { test, expect } from "vitest";

import { sum } from "§/testVitest/sum.ts";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).to.equal(3);
});
