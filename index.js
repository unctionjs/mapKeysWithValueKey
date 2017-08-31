import attach from "@unction/attach"
import fresh from "@unction/fresh"
import reduceWithValueKey from "@unction/reducewithvaluekey"

export default function mapKeysWithValueKey (unction: ValueType => KeyType => ValueType): Function {
  return function mapKeysWithValueKeyUnction (functor: FunctorType): FunctorType {
    return reduceWithValueKey(
      (accumulated: AccumulatedType): Function =>
        (value: ValueType): Function =>
          (key: KeyType): {[KeyType]: ValueType} =>
            attach(unction(value)(key))(value)(accumulated)
    )(
      fresh(functor)
    )(
      functor
    )
  }
}
