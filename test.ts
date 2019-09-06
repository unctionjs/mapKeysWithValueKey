/* eslint-disable flowtype/require-variable-type */
import mapKeysWithValueKey from "./index";

const upcase = (value) => value.toUpperCase();

test("Object", () => {
  expect(mapKeysWithValueKey(
    (value) => (key) => upcase(key + value)
  )({
    newLabel: "1",
    newValue: "2",
  })).toEqual({
    NEWLABEL1: "1",
    NEWVALUE2: "2",
  });
});

test("Map", () => {
  expect(mapKeysWithValueKey(
    (value) => (key) => upcase(key + value)
  )(
    new Map([
      ["newLabel", "1"],
      ["newValue", "2"],
    ])
  )).toEqual(new Map([
    ["NEWLABEL1", "1"],
    ["NEWVALUE2", "2"],
  ]));
});
