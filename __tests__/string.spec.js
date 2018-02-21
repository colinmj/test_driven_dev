const countLetters = require("../lib/stringCount");

describe("Counting letters", () => {
  describe("No numbers allowed", () => {
    test("should return error", () => {
      const result = countLetters("hj878");
      expect(result).toEqual("error");
    });
  });

  describe("Great Success", () => {
    test("Should work nicely", () => {
      const result = countLetters("aaabbbccc");
      expect(result).toEqual("a3b3c3");
    });
  });

  describe("Must be a string", () => {
    test("It must be a string", () => {
      const result = countLetters("aaabbbccc");
      expect(result).toEqual("a3b3c3");
    });
  });

});
