const { generateFirstName } = require("./generators");

// Test for generating a female name
test("Generate a female first name", () => {
  const name = generateFirstName("female");
  expect(name).toBeDefined();
  expect(typeof name).toBe("string");
  expect(name).toMatch(/Emma|Olivia|Ava|Isabella|Sophia/);
});

// Test for generating a male name
test("Generate a male first name", () => {
  const name = generateFirstName("male");
  expect(name).toBeDefined();
  expect(typeof name).toBe("string");
  expect(name).toMatch(/Liam|Noah|William|James|Oliver/);
});

// Test for invalid sex parameter
test("Invalid sex parameter", () => {
  expect(() => generateFirstName("invalid")).toThrow("Invalid sex parameter");
});
