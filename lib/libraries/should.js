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
 * a `Library` implementation for Should.
 *
 * Usage
 * -----
 *
 *      var should = require('reveal').Library.create('should');
 *
 *
 * @class ShouldLibrary
 * @extends Library
 * @constructor
 */
function ShouldLibrary() {
    Library.call(this);
}

ShouldLibrary.TYPE = 'should';
util.inherits(ShouldLibrary, Library);

Library.mix(ShouldLibrary, {

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

module.exports = ShouldLibrary;
