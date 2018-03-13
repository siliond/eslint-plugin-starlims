/**
 * @fileoverview Parses out starlims declarations found in js files
 * @author Daniel Silion
 */
"use strict";
var starlims = require('./processors/starlims.js');


//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import processors
module.exports.processors = {

    // add your processors here
    ".js": starlims
};
