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
