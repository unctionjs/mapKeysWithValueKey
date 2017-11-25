/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import mapKeysWithValueKey from "./index"

const upcase = (value) => value.toUpperCase()

test("Object", ({same, end}) => {
  same(
    mapKeysWithValueKey(
      (value) => (key) => upcase(key + value)
    )({
      newLabel: "1",
      newValue: "2",
    }),
    {
      NEWLABEL1: "1",
      NEWVALUE2: "2",
    }
  )

  end()
})

test("Map", ({same, end}) => {
  same(
    mapKeysWithValueKey(
      (value) => (key) => upcase(key + value)
    )(
      new Map([
        ["newlabel", "1"],
        ["newlabel", "2"],
      ])
    ),
    new Map([
      ["NEWLABEL1", "1"],
      ["NEWLABEL2", "2"],
    ])
  )

  end()
})
