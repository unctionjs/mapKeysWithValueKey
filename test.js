/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {same} from "tap"

import mapKeysWithValueKey from "./index"

const upcase = (value) => value.toUpperCase()

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
