import { describe, expect, it } from "vitest";
import { formatCurrency } from "./formatCurrency";

describe("utils/", () => {
  describe("formatCurrency", () => {
    it.each([
      { input: 100, expected: "100 zł" },
      { input: 0, expected: "0 zł" },
      { input: -5, expected: "-5 zł" },
      { input: 1.06, expected: "1,06 zł" },
      { input: -1.02, expected: "-1,02 zł" },
      { input: -0.5, expected: "-0,5 zł" },
      { input: NaN, expected: "NaN zł" },
      { input: 1.003, expected: "1 zł" },
      { input: 1.005, expected: "1,01 zł" },
      { input: 1.007, expected: "1,01 zł" },
    ])(`formatCurrency($input) return $expected`, ({ input, expected }) => {
      expect(formatCurrency(input)).toEqual(expected);
    });
  });
});
