const isPalindrome = require("../lib/palindrome");

describe("It is a palindrom", () => {
  describe("When it is not a palindrome", () => {
    test("should return false", () => {
      const result = isPalindrome(" This is most certainly not a palindrome");
      expect(result).toEqual(false);
    });
  });

  describe("When it is a palindrome", () => {
    test("should return true", () => {
      const result = isPalindrome("never odd or even");
      expect(result).toEqual(true);
    });
  });
});
