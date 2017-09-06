# `<lib-loader>` Polymer Element

[![Build status](https://travis-ci.org/LasaleFamine/polymer-lib-loader.svg?branch=master)](https://travis-ci.org/LasaleFamine/polymer-lib-loader)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/sindresorhus/xo)


> Library loader WebComponent for external (or internal) library. Written on top of [Polymer 3.0](https://www.polymer-project.org/).

## Why

A simple component for delegate the task to import an external library.
If you need to attach a library to the `window` object from within a module-component.

#### NOTE:
I'm using a modified version of `@polymer/polymer` which I forked, removing the `flat` (useless and problematic) property for `yarn`.

## Install

    $ yarn add polymer-lib-loader

## Usage

You may want to load it using Webpack.

### awesome-component.js
``` js
import 'polymer-lib-loader';

// Your awesome component logic...

...

static get template() {
  return `
  <lib-loader
    lib="https://cdnjs.cloudflare.com/ajax/libs/[lib]/[version]/[lib].js"
    lib-unique-id="uniqueIdHere"
    on-lib-loaded="yourCallbackOnLoad"></lib-loader>
  `
}

...
```
The [`demo`](https://github.com/LasaleFamine/polymer-lib-loader/blob/master/demo/) uses a bundled element. You can check the [`webpack.config.js`](https://github.com/LasaleFamine/polymer-lib-loader/blob/master/test/webpack.config,js) for more details.


## Default Properties
``` js

{
  /** Instance link **/
  lib: {
    type: String
  },
  /** <script id=""> */
  libUniqueId: {
    type: String
  },
  /** True when the lib is ready */
  libReady: {
    type: Boolean,
    value: false
  }
}

```

## Note on library load
The ability of the component to load the library and not reload it again and again is related to the `libUniqueId`.
The `<script id="yourId" src="yourLibLink">` will be attached as a child of the `body` and **removed when the component is detached** (or when a wrapper of it is detached).

## API

#### .removeLib()
Remove the library from the page
____


### Events

#### on-lib-loaded
When the initialization of the library is complete


## Develop

    $ yarn

Compile and start a web server (http://localhost:8080/polymer-lib-loader/demo)

    $ yarn start

Build: only the **Webpack** action simply run

    $ yarn build


## Test

[XO](https://github.com/sindresorhus/xo) for coding style and [WCT](https://github.com/polymer/web-component-tester) for unit test:

    $ yarn test

## License

[MIT](https://github.com/LasaleFamine/polymer-lib-loader/blob/master/LICENSE.md) &copy; LasaleFamine
