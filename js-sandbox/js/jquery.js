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
$(thirdLi).html('<span>List 2 Item 3 <a href="https://v2.com" target="_blank">v2</a></span>');
$(thirdLi+' a').attr('id','link-v2');

console.log($('#fname').val());
console.log($('input[type="radio"]').val());


/* --- */
echo ('Class manipulating',"letItRun()");

/* --- */
echo ('Events',"letItRun()");

//This is an mini app
(function letItRun() { //just named wrapper, for reference
  const itemName = '<span class="arm">List 2 Item</span> ';
  let itemCount = 0;
  const secondUl = 'ul.ul-circle';
  const secondUlLis = 'ul.ul-circle li';

  $('#add').on('click', function (){
    itemCount = $(secondUlLis).length+1;
    console.log(itemCount);
    $(secondUl).append('<li>' + itemName + itemCount + '</li>');
    $('#remove').attr('disabled', false);
  })

  $('#remove').on('click', function (){
    itemCount = $(secondUlLis).length-1;
    console.log(itemCount);
    $(secondUlLis).last().slideUp('slow', function (){
      $(secondUlLis).last().remove();
    });
    if (itemCount<=0) {
      $('#remove').attr('disabled', true);
    }
  })

  $(secondUl).on('mouseover', 'li span',function (){
    $(this).addClass('span-hovered');
  })

  $(secondUl).on('mouseout', 'li span',function (){
    $(this).removeClass('span-hovered');
  })

  $(secondUl).on('click', 'li',function (){
    $(this).toggleClass('span-selected');
  })
})();

