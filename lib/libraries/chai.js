/**
 * Copyright (c) 2012, Yahoo! Inc. All rights reserved.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 *
 * Adapted from the Istanbul project (https://github.com/gotwarlost/istanbul).
 * By Feng Qiu <feng@ban90.com>
 */

var util = require('util'),
    Library = require('./index');

/**
 * a `Library` implementation for Chai.
 *
 * Usage
 * -----
 *
 *      var chai = require('reveal').Library.create('chai');
 *
 *
 * @class ChaiLibrary
 * @extends Library
 * @constructor
 */
function ChaiLibrary() {
    Library.call(this);
}

ChaiLibrary.TYPE = 'chai';
util.inherits(ChaiLibrary, Library);

Library.mix(ChaiLibrary, {

    queryFeature: function() {
    },

    getPatchFunction: function() {
    },

    addAssertion: function() {
    },

    wrapAssertion: function() {
    },

    addProducer: function() {
    },

    setValue: function() {
    },

    getValue: function() {
    },

    replaceErrorMessage: function() {
    },

    appendToErrorMessage: function() {
    }

});

module.exports = ChaiLibrary;
