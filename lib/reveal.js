/**
 * This module exports the reveal function.
 *
 * # The reveal function #
 *
 * This function takes the name of the assertion library to patch, and returns
 * a patch function for the library.
 *
 * This function object also contains a few methods, to show the list of supported
 * assertion libraries, and to display the version of this library, etc.
 *
 * # The patch function #
 *
 * This function is used to patch the specified assertion library. Depending on
 * the library, the way to patch it may be slightly different. For example, Chai
 * supports plugins, so this patch function will behave like a plugin function,
 * and you should call Chai's `use()` on it; for should.js, just executing this
 * function is enough to do the patching.
 *
 * This function object also contains methods for defining new assertions, or
 * adding custom error message producers to existing assertions, etc. These will
 * take effect immediately if the target assertion library is already patched,
 * or after it's patched in the future using this patch function.
 */

var Library = require('./libraries/index');

function reveal() {

}

reveal.Library = Library;

module.exports = reveal;
