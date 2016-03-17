# Flow Interfaces

**[Flow](http://www.flowtype.org) interfaces for 40+ common npm modules like
[Lodash](https://www.npmjs.com/package/iflow-lodash),
[Redux](https://www.npmjs.com/package/iflow-redux),
[Moment](https://www.npmjs.com/package/iflow-moment),
and [Koa](https://www.npmjs.com/package/iflow-koa).**

## Usage

### Install with NPM

Every interface is available on NPM; each is prefixed with `iflow-`:

`npm install --save-dev iflow-lodash`


### Add to Flow Config

Add each interface to your `.flowconfig`:

```
[libs]
node_modules/iflow-lodash/index.js.flow
```

## Available Interfaces

* iflow-axios
* iflow-bluebird
* iflow-chartist
* iflow-clamp-js
* iflow-classnames
* iflow-color
* iflow-core-decorators
* iflow-debug
* iflow-deep-diff
* iflow-dropzone
* iflow-eventemitter3
* iflow-fuse
* iflow-fuzzaldrin
* iflow-i18next
* iflow-immutable
* iflow-invariant
* iflow-isomorphic-fetch
* iflow-koa
* iflow-koa-bodyparser
* iflow-koa-router
* iflow-lodash
* iflow-material-ui
* iflow-moment
* iflow-mousetrap
* iflow-normalizr
* iflow-notifyjs
* iflow-pretty-error
* iflow-primus
* iflow-primus-emit
* iflow-primus-rooms
* iflow-radium
* iflow-react-addons-test-utils
* iflow-react-dnd
* iflow-react-native-vector-icons
* iflow-react-redux
* iflow-react-router
* iflow-react-router-redux
* iflow-react-widgets
* iflow-redux
* iflow-redux-actions
* iflow-redux-logger
* iflow-redux-thunk
* iflow-sanitize-html
* iflow-shallowequal
* iflow-stardust
* iflow-underscore
* iflow-uuid-js
* iflow-vex
* iflow-warning
* iflow-yargs

## Contributing

Pull requests are welcome! If you are adding a new interface, simply follow the structure of the `packages/iflow-*` folder:
* `index.js.flow` - Your Flow interface goes here.
* `package.json` - Replace the library's name in the `name` and `description` fields from an existing `package.json`.
