# @unction/mapKeysWithValueKey

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> MapperFunctionType<A, MapperFunctionType<B, C>> =>
>   Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string =>
>     Array<B> | Set<B> | Record<string | number | symbol, B> | Map<C, B> | string

Map over keys with the context of the value and key.

``` javascript
const attributes = {
  name: "Kurtis Rainbolt-Greene",
  createdAt: new Date()
}

mapKeys((value) => (key) => )(attributes)
```

Would return:

``` javascript
{
  name: "Kurtis Rainbolt-Greene",
  "created-at": new Date()
}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/mapKeysWithValueKey.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/mapKeysWithValueKey.svg?maxAge=2592000&style=flat-square
