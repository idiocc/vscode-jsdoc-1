# @idio/vscode-jsdoc-1

[![npm version](https://badge.fury.io/js/@idio/vscode-jsdoc-1.svg)](https://npmjs.org/package/@idio/vscode-jsdoc-1)

`@idio/vscode-jsdoc-1` is The test of jsdoc

```sh
yarn add @idio/vscode-jsdoc-1
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`vscodeJsdoc_1(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
  * [`_@idio/vscode-jsdoc-1.Config`](#type-_@idio/vscode-jsdoc-1config)
- [Copyright](#copyright)

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/0.svg?sanitize=true"></a></p>

## API

The package is available by importing its default function:

```js
import vscodeJsdoc_1 from '@idio/vscode-jsdoc-1'
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/1.svg?sanitize=true"></a></p>

## `vscodeJsdoc_1(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

__<a name="type-_@idio/vscode-jsdoc-1config">`_@idio/vscode-jsdoc-1.Config`</a>__: Options for the program.

|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| __text*__ | <em>string</em>  | A text to return. | -       |

```js
/* alanode example/ */
import vscodeJsdoc_1 from '@idio/vscode-jsdoc-1'

(async () => {
  const res = await vscodeJsdoc_1({
    text: 'example',
  })
  console.log(res)
})()
```
```
example
```

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/2.svg?sanitize=true"></a></p>

## Copyright

(c) [Idio][1] 2019

[1]: https://idio.cc

<p align="center"><a href="#table-of-contents"><img src=".documentary/section-breaks/-1.svg?sanitize=true"></a></p>