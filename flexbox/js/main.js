let collapsed = true;

function toggleMobileMenu() {
  document.getElementById("nav").classList.toggle("hidden");
  img = document.querySelector('#hamburger img');
  collapsed = !collapsed;
  if (collapsed) {
    img.setAttribute('src', 'images/icon-hamburger.svg');
  } else {
    img.setAttribute('src', 'images/icon-close.svg');
  }
}

function listenKeyboard(event) {
  if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
    toggleMobileMenu();
  }
}

document.getElementById('hamburger').onclick = toggleMobileMenu;
document.getElementById('hamburger').onkeyup = listenKeyboard;

// Legacy JQuery
// Adding Content by button
$("#add").on("click", function () {
  $("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus adipisci autem commodi eaque earum error facere iste itaque magni maxime minima nobis nulla quam quia quo quod reiciendis sint, totam voluptatem. A, accusantium, ad atque deleniti enim ex iste libero mollitia natus nesciunt nihil quas saepe suscipit, tenetur voluptates.</p>").appendTo(".content");
});