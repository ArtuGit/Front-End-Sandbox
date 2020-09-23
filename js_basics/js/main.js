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
  let varLocal = 'varLocal'
  return varLocal
}

function checkLocal() {
  // console.log(varLocal); will cause an Error
}

echo (greetingMsg,'console.log()');
console.log(greetingMsg);

echo ('Global Var','checkGlobal,varGlobal');
checkGlobal()


echo ('Local Var','checkLocal,varLocal');
checkLocal()
// console.log(varLocal); will cause an Error

echo ('Constants','greetingMsg');
// greetingMsg = 'Hello Bad!'; //will cause an Error

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

echo('Strings, "String" object')
const str = 'String constants, also known as string literals, are a special type of constants which store fixed sequences of characters.'
console.log('Third letter: ' + str[2]); // r
console.log('Length: ' + str.length); // 123
console.log(str.indexOf(','))
console.log(str.substr(0,str.indexOf(',')-1)) // String constants


echo('Conditions','see "Numbers"' )
echo('Ternary operator','echo' )

echo('Loops' )
let numWhile=1
while (numWhile<=3) {
  console.log(numWhile)
  numWhile++; // 1 2 3
}
for (let numLoop = 3; numLoop >= 1; numLoop--) {
  console.log(numLoop) // 3 2 1
}

// Will be specified
echo('Functions', 'echo')
echo('A function as a var', 'funcDeclare,funcResult')
const funcDeclare = function (param) {
  const result = 'func:' + param
  console.log(result)
  return result
}
console.log(typeof(funcDeclare)) //function
const funcResult = funcDeclare('1') //function
console.log(typeof(funcResult)) //function
console.log(funcResult) //func:1