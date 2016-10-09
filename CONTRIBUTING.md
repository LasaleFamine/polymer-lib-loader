For everyone who wants to contribute to this repository, here is how to do it.

# Install

1. Fork this repository and clone it to your computer
2. Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
3. Install the current LTS version (4.x) of [Node.js](https://nodejs.org/en/download/) or newer.
4. Install the latest version of Bower with `npm install -g bower`. 

- Don't have npm installed ? No worries, get it [here](https://docs.npmjs.com/cli/install)

5. Last step in installation process: `bower install polymer-lib-loader`

# Default properties

```
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

# Develop

Clone the repository **inside a folder** (ex: `sandbox-polymer-lib-loader/polymer-lib-loader`) and inside the `polymer-lib-loader` folder:
```
$ npm install && bower install
```
Developing mode: **watch** on base files and **Babel** that transpiles (http://localhost:8080/polymer-lib-loader/demo)
```
$ npm start
```
Build: only the **Babel** action simply run
```
$ npm run build
```

# Test

[Standard](https://github.com/feross/standard) for coding style and [WCT](https://github.com/polymer/web-component-tester) for unit test.
```
npm test
```

# License

[MIT](https://github.com/LasaleFamine/polymer-lib-loader/blob/master/LICENSE.md) &#169; LasaleFamine
