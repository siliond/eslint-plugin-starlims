# eslint-plugin-starlims

Parses out starlims declarations found in js files. Primarily designed for Redux CLI for parsing starlims syntax.

For example if you have a file like below, eslint will not be able to parse it normally due to the starlims markers. With this plugin, the linter is able to work normally. Note that whatever is inside the markers will remain.
```js
#include "HTMLUnitTests.Form_EventEmitter"

//BEGIN_GLOBAL_DECLARATIONS (place global declarations inside this section)

var txtControlInputTextBox = form.All( "txtControlInputTextBox" );
```

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-starlims`:

```
$ npm install eslint-plugin-starlims --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-starlims` globally.

## Usage

Add `starlims` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "starlims"
    ]
}
```

## Tests
```
$ npm test
```
