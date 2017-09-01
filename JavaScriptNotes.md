# Classes in Javascript

* There are three ways to define an object in Javascript.
    - using a function
    - Using object literals
    - Singleton using a function

### Using a function

* most common way to define an object in javascript
```javascript
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}

function getAppleInfo() {
    return this.color + ' ' + this.type  + ' apple';
}
```

* to instantiate an object using Apple's _constructor_ function
* we can set some properties and call methods

```javascript
var apple = new Apple('zarwis');
apple.color = "red";

alert(apple.getInfo())
```

* we can define methods internally too.
```javascript
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    }
}

```

* methods added to the prototype
* this is used when we don't want a particular methods in all the instances of the object
* The prototype object shares (not duplicated) across all the instances of the object \
  it lives on.

```javascript
function Apple (type) {
    this.type = type;
    this.color = "red";
}

Apple.prototype.getInfo = function () {
    return this.color + ' ' + this.type + ' apple';
}
```

* we can also create objects using `Object()` constructor
```javascript
var person1 = new Object();
// this stores an empty object in the person1 variable
person1.name = 'sherry';
person1['age'] = 20;
person1.greeting = function() {
    document.writeln("Hey " + this.name + ".");
}
```
* we can entirely reduce the object into single line by

```javascript
var person1 = new Object({
    name : 'sherry',
    age : 20,
    greeting : function() {
        document.writeln("Hey " + this.name + ".");
    }
})
```

* we can create a new object using an existing object by using `create()` method

```javascript
var person2 = new Object.create(person1);
```

* IE8 does not support create() method

### Object Prototypes in Javascript

Prototypes are mechanisms in which Javascript objects inherits features from one another\\
and they work differently than inheritance mechanisms in classical OOP languages.
