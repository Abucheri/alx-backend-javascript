import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

describe("updateUniqueItems", () => {
  it("should update quantity of unique items to 100", () => {
    const initialMap = new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 1],
      ['Rice', 1],
      ['Banana', 5]
    ]);
    const expectedMap = new Map([
      ['Apples', 10],
      ['Tomatoes', 10],
      ['Pasta', 100],
      ['Rice', 100],
      ['Banana', 5]
    ]);
    updateUniqueItems(initialMap);
    expect(initialMap).toEqual(expectedMap);
  });

  it("should throw an error if argument is not a map", () => {
    expect(() => {
      updateUniqueItems({});
    }).toThrow('Cannot process');
  });
});
