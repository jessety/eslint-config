# @jessety/eslint-config

> Yet another ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs.html) for TypeScript or JavaScript projects

## Install

```sh
npm install --save-dev eslint @jessety/eslint-config
```

## Usage

Shareable configs work by leveraging the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) feature in your [ESLint configuration](http://eslint.org/docs/user-guide/configuring). Once the package is installed, define `extends` to `@jessety`.

For example, a valid `.eslintrc.json` file could be:

```json
{
  "extends": "@jessety"
}
```

_The `eslint-config` suffix may be omitted because it is assumed by ESLint._

### Configurations

This package contains three sharable configurations: `base`, `strict`, and `javascript`.

- `base` - core rules for TypeScript projects. Does not require TypeScript build. Fast.
- `strict` - Stricter rules for TypeScript projects. Requires type checking. Slower than `base`.
- `javascript` - ESLint rules for JavaScript projects

As of version 2.x.x, `base` is the default export for `.ts` files, and `javascript` is the default for `.js`, `.mjs`, or `.cjs` files. To request one or the other, specify which in the `eslintrc` file. For example, a `.eslintrc.json` file that uses `strict` configuration may look like this:

```json
{
  "extends": "@jessety/eslint-config/strict"
}
```

The `base` and `strict` configuration require `typescript` and `eslint` as peer dependencies. The `javascript` configuration only requires `eslint`.

## License

MIT © Jesse Youngblood
