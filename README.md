# use-qs react hook

use-qs is a react use that uses [qs](https://github.com/ljharb/qs) to allow nesting support in querystrings by surrounding the name of sub-keys with square brackets []. For example, the string 'foo[bar]=baz' converts to:

```
{
    "foo": {
        "bar": "baz"
    }
}
```

### Contributing

How to contribute, build and release are outlined in [CONTRIBUTING.md](CONTRIBUTING.md), [BUILDING.md](BUILDING.md) and [RELEASING.md](RELEASING.md) respectively. Commits in this repository follow the [CONVENTIONAL_COMMITS.md](CONVENTIONAL_COMMITS.md) specification.
