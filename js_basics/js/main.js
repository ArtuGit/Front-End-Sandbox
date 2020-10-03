let varGlobal = 'varGlobal'
const greetingMsg = 'Hello World!'


function echo(name, keywords) {
  const li = '<li>' + name +
      ((typeof keywords !== 'undefined') ? ': <span class="keyword">' + keywords + '</span>' : "")
              + '</li>'
  const existing = document.getElementById("list").innerHTML
  document.getElementById("list").innerHTML = existing + li
  console.log('---' + name + '---');
}

function checkGlobal() {
  console.log(varGlobal);
  let varLocal = 'varLocal' //redundant, needed to demonstrate
  return varLocal
}

function checkLocal() {
  // console.log(varLocal); will cause an Error
}

/* --- */
echo (greetingMsg,'console.log()');
console.log(greetingMsg);

/* --- */
echo ('Global Var','checkGlobal,varGlobal');
checkGlobal()

/* --- */
echo ('Local Var','checkLocal,varLocal');
checkLocal()
// console.log(varLocal); will cause an Error

/* --- */
echo ('Constants','greetingMsg');
// greetingMsg = 'Hello Bad!'; //will cause an Error

/* --- */
echo ('Numbers, "Number" and "Math" objects');
const numSmall = 3;
const numBig = Math.pow(2, 53)-1;
let num = numSmall + numBig

if (Number.isSafeInteger(num)) {
  console.log('Precision safe.');
  }
else {
  console.log(num + ': Precision may be lost!'); //win
}

/* --- */
echo('Strings, "String" object')
const str = 'String constants, also known as string literals, are a special type of constants which store fixed sequences of characters.'
console.log('Third letter: ' + str[2]); // r
console.log('Length: ' + str.length); // 123
console.log(str.indexOf(','))
console.log(str.substr(0,str.indexOf(',')-1)) // String constants

/* --- */
echo('Conditions','see "Numbers"' )

/* --- */
echo('Ternary operator','echo' )

/* --- */
echo('Loops' )
let numWhile=1
while (numWhile<=3) {
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
console.log(typeof(funcDeclare)) //function
const funcResult = funcDeclare('1') //function
console.log(typeof(funcResult)) //function
console.log(funcResult) //func:1

/* --- */
echo('Function as var', 'funcDeclare1,funcResult1')
function funcDeclare1(param) {
  return 'func:' + param
}
console.log(typeof(funcDeclare1)) //function
const funcResult1 = funcDeclare1('2') //function
console.log(typeof(funcResult1)) //function
console.log(funcResult1) //func:2

/* --- */
echo ('Arrow functions','sumArrow, doubleArrow, sayHiArrow, sumArrow1')
let sumArrow = (a, b) => a + b; // 2 parameters
/* This arrow function is a shorter form of:
let sum = function(a, b) {
  return a + b;
};
*/
console.log(sumArrow(1, 2) ); // 3

let doubleArrow = n => n * 2; // 1 parameter
// roughly the same as: let double = function(n) { return n * 2 }
console.log(doubleArrow(3) ); // 6

let sayHiArrow = () => console.log("Hi!"); // no parameter
sayHiArrow();

let sumArrow1 = (a, b) => {  // the curly brace opens a multiline function
  return a + b;
};
console.log(sumArrow1(2, 3) ); // 5

/* --- */
echo('Higher Order Functions') //A function as an argument of another function
setTimeout(() => console.log('Hi from "Higher Order Functions" section'), 500)

/* --- */
echo('Arrays','friends, couple, friends3')
let friends  = ['Emma','Liam','Olivia', 'Noah', 'Ava', 'William']
console.log(friends.length)
friends.push('Isabella');
friends.push('Wrong');
friends.pop();
console.log(friends)
console.log(friends.indexOf("Noah"))
couple = friends.slice(1,3)
console.log(couple)

// Array Iteration
const friends3 = friends.slice(0,3)
console.log(friends3)

for (let i = 0; i < friends3.length; i++) { //Method 1. 'while is possible too
  console.log(friends3[i])
}
friends3.forEach( (item) => console.log(item) )

/* --- */
echo('Objects',"dog")
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
console.log(dog)
dog.toBark();

/* --- */
echo('DOM');
const h1 = document.querySelector('h1');
console.log(h1)
console.log(typeof(h1)) //object

console.log(document.getElementById('the-second'))
console.log(document.querySelector('#the-second')) // the same as previous

console.log(document.getElementsByClassName('li-regular'))
console.log(document.querySelector('.li-regular')) // first one from previous previous

console.log(document.getElementsByTagName('h2'))
console.log(document.querySelector('h2')) // first one from previous previous
console.log(document.querySelectorAll('h2')) // all

echo('DOM Manipulation');
let paragraph = document.querySelector('#first-p');
//Add/Remove/Change Class
console.log(paragraph);
paragraph.style.color = "#ffbe0b";
paragraph.classList.add('border');

//Change Content
let strong = document.querySelector('p#first-p > strong ');
strong.textContent = "Dollar ($)";
/* --- */

echo('Event Listeners');
let flag = true;
let button = document.querySelector('button');
button.addEventListener('click', () => {
  console.log('The button was clicked.');
  if (flag) {
    paragraph.style.background = '#8338ec';
  }
  else {
    paragraph.style.background = '#3a86ff';
  }
  flag = !flag;
});

let lis = document.querySelectorAll('ul.ul-circle li');
for (let i=0; i<lis.length; i++)
{
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

/*
ul.addEventListener('mouseover', () => {
  ul.styles.color = '#ffbe0b';
});*/
