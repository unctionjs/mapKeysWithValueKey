import mergeRight from "@unction/mergeright"
import fresh from "@unction/fresh"
import of from "@unction/of"
import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function mapKeysWithValueKey (unction: ValueType => KeyType => KeyType): UnaryFunctionType {
  return function mapKeysWithValueKeyUnction (functor: KeyedFunctorType): KeyedFunctorType {
    return reduceWithValueKey(
      (accumulated: KeyedFunctorType): UnaryFunctionType =>
        (value: ValueType): UnaryFunctionType =>
          (key: KeyType): KeyedFunctorType => {
            return mergeRight(accumulated)(of(unction(value)(key))(value)(accumulated))
          }
    )(
      fresh(functor)
    )(
      functor
    )
  }
}
