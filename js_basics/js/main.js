let varGlobal = 'varGlobal'

function echo(name, keywords) {
  const li = '<li>' + name +
      ((typeof keywords !== 'undefined') ? ': <span class="keyword">' + keywords + '</span>' : "")
              + '</li>'
  const existing = document.getElementById("list").innerHTML
  document.getElementById("list").innerHTML = existing + li
}

function checkGlobal() {
  console.log(varGlobal);
  let varLocal = 'varLocal'
  return varLocal
}

function checkLocal() {
  // console.log(varLocal); will cause Error
}
const greetingMsg = 'Hello World!'

echo (greetingMsg,'console.log()');
console.log(greetingMsg);

checkGlobal()
echo ('Global Var','checkGlobal,varGlobal');

checkLocal()
// console.log(varLocal); will cause Error
echo ('Local Var','checkLocal,varLocal');


