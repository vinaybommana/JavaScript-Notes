# Generator functions
 
* one of the main uses of generator functions we might use them to grab values from any infinite series.
* This can have major applications such as generative algorithms for graphics, computer game levels, music sequences.

	Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances. Generator functions are a new feature in ES6 that allow a function to generate many values over time by returning an object which can be iterated over to pull values from the function one value at a time.

### The Iterator Protocol

The iterator object has a `.next()` method. When the `.next()` method is called, the function body resumes after the line that was executed the last time `.next()` was called.

Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value as a boolean. Calling the next() method with an argument will resume the generator function execution, replacing the yield statement where execution was paused with the argument from next().

A return statement in a generator, when executed, will make the generator done. If a value is returned, it will be passed back as the value. A generator which has returned will not yield any more values.


* simple example

```javascript
function* idMaker() {
  var index = 0;
  while (index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...
```

* Example with yield*

```javascript
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```