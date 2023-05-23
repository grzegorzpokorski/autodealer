import { describe, expect, it } from "vitest";
import { formatMileage } from "./formatMileage";

describe("utils/", () => {
  describe("formatMileage", () => {
    it.each([
      { input: 100, expected: "100" },
      { input: 1000, expected: "1000" },
      { input: 10000, expected: "10 000" },
      { input: 1000000, expected: "1 000 000" },
      { input: 1000000.2, expected: "1 000 000" },
      { input: 1000000.56, expected: "1 000 001" },
    ])(`formatMileage($input) return $expected`, ({ input, expected }) => {
      expect(formatMileage(input)).toEqual(expected);
    });
  });
});
