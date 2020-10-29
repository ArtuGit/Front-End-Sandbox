// click
let idsClick = ["b2","db2","sb2"];
let elementsClick = [];

for (let i = 0; i < idsClick.length; i++) {
  elementsClick[i] = document.getElementById(idsClick[i]);
  elementsClick[i].addEventListener("click", function(event) {
    alert('Clicked!')
  });
}

// keyup
let idsPress = ["b3","db3","sb3"];
let elementsPress = [];

for (let i = 0; i < idsPress.length; i++) {
  elementsPress[i] = document.getElementById(idsPress[i]);
  elementsPress[i].addEventListener("keyup", function(event) {
    if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      alert('Pressed!')
    }
  });
}

