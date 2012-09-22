# options for node.js

An implementation of the option type, sometimes known as the maybe type.

An instance of an option type is an optional value. Either it's `none`, or an
instance of `Some`:

```javascript
var option = require("option");

var some = option.some("Bob");
var none = option.none;
```   

A function that returns an optional string isn't that different from a function
that returns a string or `null`. The advantage over null is that options
provide a number of functions that help with manipulating optional values.

```javascript
    function greet(user) {
        return "Hello " + user.name().valueOrElse("Anonymous");
    }
```

## Methods

### map(*func*)

* `some(value).map(func)` returns `some(func(value))`
* `none.map(func)` returns `none`

### toArray()

* `some(value).toArray()` returns `[some]`
* `none.toArray()` returns `[]`

### orElse(*other*)

If `other` is a function (`other` conventionally returning another option):

* `some(value).orElse(other)` returns `some(value)`
* `none.orElse(other)` returns `other()`

If `other` is not a function (`other` conventionally being another option):

* `some(value).orElse(other)` returns `some(value)`
* `none.orElse(other)` returns `other`

### valueOrElse(*other*)

If `other` is a function:

* `some(value).valueOrElse(other)` returns `value`
* `none.valueOrElse(other)` returns `other()`

If `other` is not a function:

* `some(value).valueOrElse(other)` returns `value`
* `none.valueOrElse(other)` returns `other`

## Installation

    npm install option
