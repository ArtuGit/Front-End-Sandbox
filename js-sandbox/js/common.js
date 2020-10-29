function echo(name, keywords) {
  const li = '<li>' + name +
      ((typeof keywords !== 'undefined') ? ': <span class="keyword">' + keywords + '</span>' : "")
      + '</li>'
  const existing = document.getElementById("list").innerHTML
  document.getElementById("list").innerHTML = existing + li
  console.log('---' + name + '---');
}
