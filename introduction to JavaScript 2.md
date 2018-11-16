variable declaration:
    var, let, const
    if we try to reassign a const we'll get a TypeError

use backticks for template literals --> f strings in python

```
string = "hello"
print(f'{string}')

var string = "hello";
console.log(`${string}`);
```

JS's typeof is equivalent to type() in python

```
print(type(string))
console.log(typeof string);
```



## helper functions
the functions being called within another function are called
helper functions.


## function expression

A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ). Functions defined via Functions Expressions can be named or anonymous. Function Expressions must not start with “function” (hence the parentheses around the self invoking example below)


## articles to read

--> hoisting in JavaScript
[Hoisting](http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html)

* JavaScript has function-level scope
* name resolution order
* function declaration takes priority over variable declaration


arrow function syntax

# Iterators

# Objects in JavaScript
There are seven fundamental datatypes in JS
objects,
1. string
2. number
3. boolean
4. null
5. undefined
6. symbol


When a non string is used as the property key, it will be converted to a string (via the toString() method, when available).

```
let obj = {};

//Number
obj[1] = "Number 1";
obj[1] === obj["1"]; //true

//Object
let number1 = {
  toString : function() { return "1"; }
}
obj[number1] === obj["1"]; //true
```

In an object, accessing an element that doesn't exist will not throw an error,
but returns undefined.
