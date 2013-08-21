reveal.js
=========

Reveal isn't an assertion library, it's an assertion library enhancer. There are
plenty of great assertion libraries out there, why not build upon these existing
pieces? Reveal works with existing assertion libraries and extends their
functionalities in various ways. However, the main focus is on improving their
error reporting capabilities, hence the name: to "reveal" the cause of the error.


Goals
=====

Reveal extends existing assertion libraries in three important ways:

1.  Improve Error Reporting.

    Why do we need an assertion library, you ask? Isn't the `assert()` function
    good enough? Well, assertion libraries are useful because they carry meanings.
    They convey meanings to the reader of the tests: it's much easier to understand
    what we are testing for and how the program is expected to behave by reading
    tests written using a good assertion library. This benefit of assertion libraries
    is well-understood, as witnessed by the recent popularization of BDD-style tests.

    But assertion libraries also convey meanings to the executor of the tests:
    when you call `assert.equal(a, b)`, the assertion library knows that you are
    testing the equality of two values. This gives the assertion library more
    information and consequently a better chance of generating a more helpful
    error message than using `assert(a===b)`.

    When dealing with complex objects and long strings, good error reporting is
    paramount. A good error message should allow you to instantly see why the test
    fails, or how the assertion is violated. There are work in this field. For
    example, the convention to attach two properties, `expected` and `actual`,
    to the error object allows testing frameworks, like [Mocha](http://visionmedia.github.com/mocha),
    to provide better error reporting by diffing these two objects and show you
    which parts of them are different.

    But this only works for equality assertions. What about other types of
    assertions? They can also benefit from error reporting efforts tailored to
    them. For example, when we assert that set `A` contains set `B`, and the
    assertion fails, a good error reporting strategy is not to simply print
    both sets: both can contain many elements, but to point out which elements
    in `B` are not found in `A`, thereby causing the test to fail. [Chai](http://chaijs.com/)'s
    `members()` test can benefit from such an improvement in error reporting.

2.  Add Additional Assertions.

    As we have demostrated in the previous point, assertion methods aren't just
    gimmicks. They serve a very important function: to carry meanings. As a result,
    existing assertions provided by any single assertion library are almost always
    not enough. Assertions for small specific niches are valuable, because the more
    specific they are, the better the chance to do custom error reporting utilizing
    their meanings and properties.

    For Reveal, the priority is to add assertions that have reasonably wide use
    cases, and whose violations can be reported in a way more useful than simply
    printing out all involved values.

3.  Mechanism for Custom Assertions with Custom Error Reporting.

    One can never provide all assertions the users will ever want to use, so a
    mechanism for users to define custom assertions is important. Additionally,
    since one of the most important reasons we need these assertions is to improve
    error reporting, a mechanism must be in place for the user to specify how
    violations of the custom assertion should be reported.


License
=======

MIT License
