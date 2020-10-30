// Handle accordion clicks

let accordions = document.querySelectorAll("div.question");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    accordions[i].parentElement.classList.toggle("open");
  });
}

// Handle keys pressing on questions

let questions = document.querySelectorAll("div.question"); // for keyboard
console.log(questions);
for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("keyup", function (event) {
    if (event.key === " " || event.key === "Enter" || event.key === "Spacebar") { // "Spacebar" for IE11 support
      questions[i].parentElement.classList.toggle('open');
    }
  });
}

