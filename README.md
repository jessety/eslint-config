# @jessety/eslint-config

> Yet another ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs.html).

## Install

```bash
$ npm install --save-dev eslint @jessety/eslint-config
```

## Usage

Shareable configs work by leveraging the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) feature in your [ESLint configuration](http://eslint.org/docs/user-guide/configuring). Once the package is installed, define `extends` to `@jessety`.

For example, a valid `.eslintrc.json` file could be:
```js
{
  "extends": "@jessety"
}
```

*The `eslint-config` suffix may be omitted because it is assumed by ESLint.*

## License

MIT © Jesse Youngblood
