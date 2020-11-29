import mergeRight from "@unction/mergeright";
import fresh from "@unction/fresh";
import of from "@unction/of";
import reduceWithValueKey from "@unction/reducewithvaluekey";
import {MapperFunctionType} from "./types";

export default function mapKeysWithValueKey<A, B, C> (unction: MapperFunctionType<A, MapperFunctionType<B, C>>) {
  return function mapKeysWithValueKeyUnction (enumerable: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): KeyedEnumerableType<B, C> {
    return reduceWithValueKey((accumulated: Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string) => (value: A) => (key: B): KeyedEnumerableType<B, C> => {
      return mergeRight(accumulated)(of(unction(value)(key))(value)(accumulated));
    })(
      fresh(enumerable)
    )(
      enumerable
    );
  };
}
