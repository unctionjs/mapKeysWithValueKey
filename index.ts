import mergeRight from "@unction/mergeright";
import fresh from "@unction/fresh";
import of from "@unction/of";
import reduceWithValueKey from "@unction/reducewithvaluekey";
export default function mapKeysWithValueKey (unction) {
  return function mapKeysWithValueKeyUnction (functor) {
    return reduceWithValueKey((accumulated) => (value) => (key) => {
      return mergeRight(accumulated)(of(unction(value)(key))(value)(accumulated));
    })(fresh(functor))(functor);
  };
}
