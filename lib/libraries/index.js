/**
 * Copyright (c) 2012, Yahoo! Inc. All rights reserved.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 *
 * Adapted from the Istanbul project (https://github.com/gotwarlost/istanbul).
 * By Feng Qiu <feng@ban90.com>
 */

var Factory = require('../util/factory'),
    factory = new Factory('library', __dirname, false);

/**
 * An abstraction for seemlessly dealing with assertion libraries.
 * This class is both the base class as well as a factory for `Library` implementations.
 *
 * Usage
 * -----
 *
 *      var Library = require('reveal').Library,
 *          chai = Library.create('chai');
 *
 *
 * @class Library
 * @constructor
 * @protected
 * @param {Object} [options] - The options supported by a specific assertion library.
 */
function Library(/* options */) {}

//add register, create, mix, loadAll, getLibraryList as class methods
factory.bindClassMethods(Library);

Library.prototype = {

    /**
     * Given a feature name, returns whether the feature is supported in this
     * assertion library. The actual return value differs between features, it
     * may be just a boolean value representing whether the feature is supported,
     * or additional information describing how the feature is supported in this
     * assertion library and how to use it.
     *
     * @method queryFeature
     * @param {string} feature - Name of the feature in question.
     * @returns {*}
     */
    queryFeature: function() { throw new Error("queryFeature: must be overridden"); },

    /**
     * Return a patch function for this assertion library.
     *
     * @method getPatchFunction
     * @returns {function} the patch function.
     */
    getPatchFunction: function() { throw new Error("getPatchFunction: must be overridden"); },

    /**
     * Add a new assertion to this assertion library.
     *
     * @method addAssertion
     * @param {string} name - Name of the assertion.
     * @param {function} impl - Function to implement the assertion.
     * @param {function} [producer] - Custom error message producer for the assertion.
     */
    addAssertion: function() { throw new Error("addAssertion: must be overridden"); },

    /**
     * Wrap an existing assertion in this assertion library.
     *
     * @method wrapAssertion
     * @param {string} name - Name of the assertion to wrap.
     * @param {function} wrapper - The wrapper function. The wrapped assertion will be
     *                             evaluated before calling this function, and this
     *                             function will be provided both the operands of the
     *                             assertion and, if the wrapped assertion threw an error,
     *                             the error object. The wrapper can decide whether to
     *                             throw this error, throw a modified error object, or
     *                             suppress this error.
     */
    wrapAssertion: function() { throw new Error("wrapAssertion: must be overridden"); },

    /**
     * Add an error message producer to an existing assertion in this assertion library.
     *
     * @method addProducer
     * @param {string} name - Name of the target assertion.
     * @param {function} producer - Custom error message producer for the assertion.
     */
    addProducer: function() { throw new Error("addProducer: must be overridden"); },

    /**
     * Store a value on the specified instance object that will be used by later calls
     * on the same "language chain". The instance object is typically what is returned
     * by calls on the chain.
     *
     * @method setValue
     * @param {Object} instance - The instance object on which to set the value.
     * @param {string} key - The key used to access the value.
     * @param {*} value - The value.
     */
    setValue: function() { throw new Error("setValue: must be overridden"); },

    /**
     * Retrieve a previously set value on the same language chain.
     *
     * @method getValue
     * @param {Object} instance - The instance object on which the value was set.
     * @param {string} key - The key used to set the value.
     * @returns {*} The value.
     */
    getValue: function() { throw new Error("getValue: must be overridden"); },

    /**
     * Replace the error message of the specified error object. This method is
     * used to cope with different error object formats used in different assertion
     * libraries.
     *
     * @method replaceErrorMessage
     * @param {object} error - The error object.
     * @param {string} message - The new error message.
     */
    replaceErrorMessage: function() { throw new Error("replaceErrorMessage: must be overridden"); },

    /**
     * Append the supplied error message to that of the specified error object.
     *
     * @method appendToErrorMessage
     * @param {object} error - The error object.
     * @param {string} message - The error message to append.
     */
    appendToErrorMessage: function() { throw new Error("appendToErrorMessage: must be overridden"); }
};

module.exports = Library;

Library.loadAll();
