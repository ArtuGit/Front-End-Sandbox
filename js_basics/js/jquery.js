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

/* --- */
echo ('Methods',"'text','html','attr', 'val'");
console.log($('h1').text(''));
$('h1').text('JQuery Basics');

let thirdLi = 'ul.ul-circle li:nth-child(3)';
$(thirdLi).html('List 2 Item 3 <a href="https://v2.com" target="_blank">v2</a>');
$(thirdLi+' a').attr('id','link-v2');

console.log($('#fname').val());
console.log($('input[type="radio"]').val());