const sum = require("./sum");

describe("Sum tests", () => {
  test("sum two numbers", () => {
    const total = sum(1, 2);

    expect(total).toBe(3);
  });

  test("sum multiples numbers", () => {
    const total = sum(1, 2, 3, 4, 5, 6);

    expect(total).toBe(21);
  });
});
