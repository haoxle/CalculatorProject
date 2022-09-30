//when I click on a button, it goes onto the div screen: start by doing..

// Create the query selector for each element
const operator = document.querySelector("#gbac");
const displayScreen = document.querySelector("#gbbb");
const numbers = document.querySelectorAll(".numBtn");
resultDisplayed = false;
//Set the screen to null?
displayScreen.innerText = null;

//When you press AC it turns screen to zero
const startCalc = (event) => {
  event.preventDefault();
  displayScreen.textContent = 0;
};

operator.addEventListener("click", startCalc);

//When I enter a number it will appear on the screen, including multiple numbers

// adding click handlers to number buttons
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (e) {
    // storing current input string and its last character in variables - used later
    var currentString = displayScreen.innerHTML;
    var lastChar = currentString[currentString.length - 1];

    // if result is not diplayed, just keep adding
    if (resultDisplayed === false) {
      displayScreen.innerHTML += e.target.innerHTML;
    } else if (
      (resultDisplayed === true && lastChar === "+") ||
      lastChar === "-" ||
      lastChar === "×" ||
      lastChar === "÷"
    ) {
      // if result is currently displayed and user pressed an operator
      // we need to keep on adding to the string for next operation
      resultDisplayed = false;
      displayScreen.innerHTML += e.target.innerHTML;
    } else {
      // if result is currently displayed and user pressed a number
      // we need clear the input string and add the new input to start the new opration
      resultDisplayed = false;
      displayScreen.innerHTML = "";
      displayScreen.innerHTML += e.target.innerHTML;
    }
  });
}
