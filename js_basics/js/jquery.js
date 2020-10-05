/* --- */
echo ('$ selectors');
console.log($('#the-second'));
console.log($('li'));
console.log($('ul.ul-circle li'));
console.log($('ul.ul-circle li')[0]);

/* --- */
echo ('Style Changing',"'css' method");
$('#the-second').css('color', '#ffbe0b')

$('.paragraphs p').css({
  border: '2px solid #ff006e',
  fontSize: '20x',
  padding: '10px'
})