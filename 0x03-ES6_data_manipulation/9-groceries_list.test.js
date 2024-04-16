import groceriesList from "./9-groceries_list.js";

describe("groceriesList", () => {
  it("should return a Map of groceries with the correct items and quantities", () => {
    const expectedGroceries = new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5]
    ]);
    expect(groceriesList()).toEqual(expectedGroceries);
  });
});
