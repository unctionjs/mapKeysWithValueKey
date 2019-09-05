import mergeRight from "@unction/mergeright";
import fresh from "@unction/fresh";
import of from "@unction/of";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import {MapperFunctionType} from "./types";
import {KeyedEnumerableType} from "./types";

export default function mapKeysWithValueKey<A, B, C> (unction: MapperFunctionType<A, MapperFunctionType<B, C>>) {
  return function mapKeysWithValueKeyUnction (enumerable: KeyedEnumerableType<B, A>): KeyedEnumerableType<B, C> {
    return reduceWithValueKey((accumulated: KeyedEnumerableType<B, A>) => (value: A) => (key: B): KeyedEnumerableType<B, C> => {
      return mergeRight(accumulated)(of(unction(value)(key))(value)(accumulated));
    })(
      fresh(enumerable)
    )(
      enumerable
    );
  };
}
