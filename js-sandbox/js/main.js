let varGlobal = 'varGlobal'
const greetingMsg = 'Hello World!'


function checkGlobal() {
  console.log(varGlobal);
  let varLocal = 'varLocal' //redundant, needed to demonstrate
  return varLocal
}

function checkLocal() {
  // console.log(varLocal); will cause an Error
}

/* --- */
echo(greetingMsg, 'console.log()');
console.log(greetingMsg);

/* --- */
echo('Global Var', 'checkGlobal,varGlobal');
checkGlobal()

/* --- */
echo('Local Var', 'checkLocal,varLocal');
checkLocal()
// console.log(varLocal); will cause an Error

/* --- */
echo('Constants', 'greetingMsg');
// greetingMsg = 'Hello Bad!'; //will cause an Error

/* --- */
echo('Numbers, "Number" and "Math" objects');
const numSmall = 3;
const numBig = Math.pow(2, 53) - 1;
let num = numSmall + numBig

if (Number.isSafeInteger(num)) {
  console.log('Precision safe.');
} else {
  console.log(num + ': Precision may be lost!'); //win
}

/* --- */
echo('Strings, "String" object')
const str = 'String constants, also known as string literals, are a special type of constants which store fixed sequences of characters.'
console.log('Third letter: ' + str[2]); // r
console.log('Length: ' + str.length); // 123
console.log(str.indexOf(','))
console.log(str.substr(0, str.indexOf(',') - 1)) // String constants

/* --- */
echo('Template literals')
const tl=`Wow, ${greetingMsg}` //Wow, Hello World!
console.log(tl)
console.log(`\`` === '`') // --> true
console.log(`Multi
line
A
B
C
`)
/* --- */
echo('Conditions', 'see "Numbers"')

/* --- */
echo('Ternary operator', 'echo')

/* --- */
echo('Loops')
let numWhile = 1
while (numWhile <= 3) {
  console.log(numWhile)
  numWhile++; // 1 2 3
}

for (let numLoop = 3; numLoop >= 1; numLoop--) {
  console.log(numLoop) // 3 2 1
}

/* --- */
echo('Function Declaration', 'echo')

/* --- */
echo('Function Expression', 'funcDeclare,funcResult')
const funcDeclare = function (param) {
  return 'func:' + param
}
console.log(typeof (funcDeclare)) //function
const funcResult = funcDeclare('1')
console.log(typeof (funcResult)) //string
console.log(funcResult) //func:1

/* --- */
echo('Function as var', 'funcDeclare1,funcResult1')

const func1 = function funcDeclare1(param) {
  return 'func:' + param
}

console.log(typeof (func1)) //function
console.log(typeof (func1())) //string
const funcResult1 = func1('2')
console.log(typeof (funcResult1)) //string
console.log(funcResult1) //func:2

/* --- */
echo('Arrow functions', 'sumArrow, doubleArrow, sayHiArrow, sumArrow1')
let sumArrow = (a, b) => a + b; // 2 parameters
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
console.log(sumArrow(1, 2)); // 3

let doubleArrow = n => n * 2; // 1 parameter
// roughly the same as: let double = function(n) { return n * 2 }
console.log(doubleArrow(3)); // 6

let sayHiArrow = () => console.log("Hi!"); // no parameter
sayHiArrow();

let sumArrow1 = (a, b) => {  // the curly brace opens a multiline function
  return a + b;
};
console.log(sumArrow1(2, 3)); // 5

/* --- */
echo('Higher Order Functions') //A function as an argument of another function
setTimeout(() => console.log('Hi from "Higher Order Functions" section'), 500)

/* --- */
echo('Arrays', 'friends, couple, friends3')
let friends = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'William']
console.log(friends.length)
friends.push('Isabella');
friends.push('Wrong');
friends.pop();
console.log(friends)
console.log(friends.indexOf("Noah"))
couple = friends.slice(1, 3)
console.log(couple)

// Array Iteration
const friends3 = friends.slice(0, 3)
console.log(friends3)

for (let i = 0; i < friends3.length; i++) { //Method 1. 'while is possible too
  console.log(friends3[i])
}
friends3.forEach((item) => console.log(item))

//Map
const friends4 = friends.map(x => 'Name: ' + x);
console.log(friends4);

/* --- */
echo('Objects: Basic', "dog")
let dog = {
  name: 'Rena',
  gender: 'bitch',
  age: 4,
  toBark() {
    console.log("Bow Wow! I am " + this.name + "!");
  }
}
dog.alive = true;
dog.age = 5;
console.log(dog);
dog.toBark();

/* --- */
echo('Objects Prototypes')
console.log(typeof Array.prototype); //object
console.log(typeof 'hi'.__proto__); //object (link)

String.prototype.primer = function () {
  return (this + ' ABC')
}
console.log("Hello".primer()) //Hello ABC

/* --- */
echo('Objects Factory', 'makeColor')

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    const {r, g, b} = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  color.hex = function () {
    const {r, g, b} = this;
    return (
      '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
firstColor.hex();
firstColor.rgb();

console.log(typeof makeColor) //function
console.log(typeof firstColor) //object

/* --- */
echo('Objects Constructor', "Color")

// This is a Constructor Function...
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

//If you call it on its own like a regular function...
Color(35, 60, 190); //undefined
//It returns undefined. Seems useless!

// *****************
// THE NEW OPERATOR!
// *****************

// 1. Creates a blank, plain JavaScript object;
// 2. Links (sets the constructor of) this object to another object;
// 3. Passes the newly created object from Step 1 as the this context;
// 4. Returns this if the function doesn't return its own object.

Color.prototype.rgb = function () {
  const {r, g, b} = this;
  return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
  const {r, g, b} = this;
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
  const {r, g, b} = this;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const color1 = new Color(40, 255, 60);
color1.hex();
const color2 = new Color(0, 0, 0);
color2.hex();

console.log(typeof Color) //function
console.log(typeof color1) //object

/* --- */
echo('Objects Class', "Color2")

class Color2 {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  innerRGB() {
    const {r, g, b} = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const {r, g, b} = this;
    return (
      '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
  }
}

const red = new Color2(255, 67, 89, 'tomato');
const white = new Color2(255, 255, 255, 'white');
console.log(typeof Color2) //function
console.log(typeof red) //object

/* --- */
echo('Objects Proxy', "dog, proxyDog")
let dogHandler = {
  get: function (item, property, itemProxy) {
    console.log(`You are getting the value of '${property}' property`)
    return item[property]
  },
  set: function (item, property, value, itemProxy) {
    console.log(`You are setting '${value}' to '${property}' property`);
    if (property==='name') {
      value = value + ' of Gem';
    }
    item[property] = value;
  }
}
let proxyDog = new Proxy(dog, dogHandler);
console.log(proxyDog.name); // Rena
proxyDog.name = 'Lady';
console.log(proxyDog.name); // Lady of Gem

echo('Spread and rest', 'toArray,dogExt,friendsExt');
dogExt = {
  ...dog,
  breed: 'German Shepherd'
}
console.log(dogExt)

friendsExt = [
  'Artu',
  ...friends,
]
console.log(friendsExt)


const toArray = (...rest) => {
  console.log(typeof rest) //object (array)
  return rest;
};
console.log(toArray(1, 2, 3, 4));

echo('Destructing', 'scope1,arrEl1,arrEl2');

function scope1(){ //isolated scope because 'name' is declared above
  const { name,age } = dog
  console.log(name,age)
}
scope1() // Lady of Gem 5

const [arrEl1,arrEl2] = friends
console.log(arrEl1,arrEl2) // Emma Liam

/* --- */
echo('DOM');
const h1 = document.querySelector('h1');
console.log(h1)
console.log(typeof (h1)) //object

console.log(document.getElementById('the-second'))
console.log(document.querySelector('#the-second')) // the same as previous

console.log(document.getElementsByClassName('li-regular'))
console.log(document.querySelector('.li-regular')) // first one from previous previous

console.log(document.getElementsByTagName('h2'))
console.log(document.querySelector('h2')) // first one from previous previous
console.log(document.querySelectorAll('h2')) // all

echo('DOM Manipulation');
let paragraph = document.querySelector('#first-p');
// Add/Remove/Change Class
console.log(paragraph);
paragraph.style.color = "#ffbe0b";
paragraph.classList.add('border');

// Change Content
let strong = document.querySelector('p#first-p > strong ');
strong.textContent = "Dollar ($)";

// Change Attribute
let img = document.querySelector('img');
setTimeout(() => {
  img.setAttribute('src', 'https://picsum.photos/200/300')
}, 4000)

// Append Element
container = document.querySelector('.container');
let div = document.createElement("div");
div.classList.add('block');
container.appendChild(div);

/* --- */
echo('Event Listeners');
let flag = true;
let button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('The button was clicked.');
  if (flag) {
    paragraph.style.background = '#8338ec';
  } else {
    paragraph.style.background = '#3a86ff';
  }
  flag = !flag;
});

let lis = document.querySelectorAll('ul.ul-circle li');
for (let i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', function () {
    this.classList.add('li-hovered')
  });
  lis[i].addEventListener('mouseout', function () {
    this.classList.remove('li-hovered')
  });
  lis[i].addEventListener('click', function () {
    this.classList.toggle('li-selected');
  });
}

/* --- */
echo('Scope', 'outer()');
let a = 'global';

function outer() {
  let b = 'outer';

  function inner() {
    let c = 'inner'
    console.log("3. c=" + c);   // 'inner'
    console.log("4. b=" + b);   // 'outer'
    console.log("5. a=" + a);   // 'global'
  }

  console.log("1. a=" + a);     // 'global'
  console.log("2. b=" + b);     // 'outer'
  inner();
}

outer();
console.log("6. a " + a);         // 'global'


/* --- */
echo('Closures', 'getPerson(),getCounter()');

function getPerson() {
  let name = 'Peter';

  return function displayName() {
    console.log(name);
    return (name);
  };
}

let person = getPerson();
let name = person();
console.log(name); // Peter

function getCounter() {
  let counter = 0;
  return function () {
    return counter++;
  }
}

let count = getCounter();
console.log(count());  // 0
console.log(count());  // 1
console.log(count());  // 2


function GetPerson2(name) {
  let secret = 'secret!';
  this.name = name;
  this.setName = function (newName) {
    this.name = newName
  }
  this.setNameToFoo = function () {
    this.name = foo
  }
  this.getSecret = function () {
    return secret
  }
}

let person2 = new GetPerson2('Max');
console.log(typeof person2)// object
console.log(person2.name) // Max
person2.setName('Oliver');
console.log(person2.name); // Oliver
// person2.setNameToFoo(); // ERROR: foo is undefined

let foo = 'Foo'
person2.setNameToFoo()
console.log(person2.name); // Foo

console.log(person2.secret); // undefined
console.log(person2.getSecret()) // “secret!”

/* --- */
echo('Promises', 'fakeRequestPromise,delayedColorChange');

function fakeRequest(url) {
  const delay = Math.floor(Math.random() * 100);
  setTimeout(() => {
    console.log(`Requested ${url} ...`);
  }, delay);
  if (delay > 30)
    return true;
  else
    return false;
}

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    let result = fakeRequest(url);
    if (!result)
      reject(`Connection Timeout for ${url}" :(`);
    else
      resolve(`Here is your fake data from "${url}".`);
  })
}

console.log(typeof (fakeRequestPromise)); //function

const request0 = fakeRequestPromise('api/callback0')
  .catch((err) => {
    console.log("Callback 0 is rejected, an error is catch!");
    console.log(err);
  });

console.log(typeof (request0)); //object (promise)

const request1 = fakeRequestPromise('api/callback1')
  .then((data) => {
    console.log("Success (callback1)!");
    console.log(data);
    return fakeRequestPromise('api/callback2');
  })
  .then((data) => {
    console.log("Success (callback2)!");
    console.log(data);
    return fakeRequestPromise('api/callback2');
  })
  .catch((err) => {
    console.log("Rejected!");
    console.log(err);
  })

console.log(typeof (request1)); //object (promise)

const delayedColorChange = (color, element, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const object = document.querySelector(`div.container div.block:nth-child(${element})`);
      object.style.backgroundColor = color;
      resolve();
    }, delay)
  })
}

echo('async', 'rainbow(),printRainbow()');
echo('await', 'rainbow(),printRainbow()');

async function rainbow() {
  await delayedColorChange('red', 1);
  await delayedColorChange('orange', 2);
  await delayedColorChange('yellow', 3);
  await delayedColorChange('green', 4);
  await delayedColorChange('blue', 5);
  await delayedColorChange('indigo', 6);
  await delayedColorChange('violet', 7);
  return "All colors done."
}

// rainbow().then(() => console.log("END OF RAINBOW!"))
async function printRainbow() {
  await rainbow();
  console.log("End of rainbow.")
}

printRainbow();

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequestPromise('/page1');
    console.log(data1);
    let data2 = await fakeRequestPromise('/page2');
    console.log(data2);
  } catch (e) {
    console.log("The Two request sequence is failed, an error is caught!")
    console.log("error is:", e)
  }
}

makeTwoRequests();

echo('try, catch', 'makeTwoRequests()');

echo('throw', 'getRectArea()');

function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
}

try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
  // expected output: "Parameter is not a number!"
}

echo('JSON');
const sourceJSON = ` 
{
  "firstName": "John",
  "lastName": "Smith",
  "isAlive": true,
  "age": 27,
  "address": {
    "streetAddress": "21 2nd Street",
    "city": "New York",
    "state": "NY",
    "postalCode": "10021-3100"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "212 555-1234"
    },
    {
      "type": "office",
      "number": "646 555-4567"
    }
  ],
  "children": [],
  "spouse": null
}
`; //text in backticks

const person3 = JSON.parse(sourceJSON);
console.log(typeof (person3)); //object
console.log(person3.firstName); //John
console.log(person3.phoneNumbers); // array content
const dogJSON = JSON.stringify(dog);
console.log(dogJSON);

echo('XMLHttpRequest (XHR)');
const req = new XMLHttpRequest();
req.onload = function () {
  console.log('Success: ' + this);
  const res = JSON.parse(this.responseText);
  console.log(res.ticker.price);
}
req.onerror = function () {
  console.log('Error: ' + this);
}
req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send('');

echo('fetch');

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
  .then(res => {
    console.log("Response, waiting to parse...", res)
    return res.json()
  })
  .then(data => {
    console.log("Data parsed...")
    console.log(data.ticker.price)
  })
  .catch(e => {
    console.log("Error: ", e)
  })

const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    const data = await res.json();
    console.log(data.ticker.price)
  } catch (e) {
    console.log("Error: ", e)
  }
}
fetchBitcoinPrice();