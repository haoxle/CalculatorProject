//when I click on a button, it goes onto the div screen: start by doing..

// Create the query selector for each element
const operator = document.querySelector("#gbac");
const displayScreen = document.querySelector("#gbbb");
const numbers = Array.from(document.querySelectorAll(".numBtn"));
const plus = document.querySelector(".operatorBtnPlus");
const divide = document.querySelector(".operatorBtnDivide");
const multiply = document.querySelector(".operatorBtnMultiply");
const minus = document.querySelector(".operatorBtnMinus");

let resultDisplayed = false;

console.log(numbers);
//Set the screen to null?
displayScreen.innerText = null;

//When you press AC it turns screen to zero
const startCalc = (event) => {
  event.preventDefault();
  displayScreen.textContent = 0;
};

operator.addEventListener("click", startCalc);

//When I enter a number it will appear on the screen, including multiple numbers
//I will need some conditions such as when I press AC, the number does not add on top of 0
//if use the calculator and would like to add more, how can I continue adding numbers without getting rid of old
//will need to create a storage

const enteringNumbs = (e) => {
  const currNum = displayScreen.textContent;
  const lastNum = currNum[currNum.length - 1];

  //remove 0 when you press AC
  if (currNum[0] === "0") {
    displayScreen.textContent = "";
  }

  //if there is no result you can add numbers
  if (resultDisplayed === false) {
    displayScreen.textContent += e.target.textContent;
  }
  // if you received your answer and add an operator function, you can add more
  else if (
    (resultDisplayed === true && lastNum == "+") ||
    lastNum == "-" ||
    lastNum == "x" ||
    lastNum == "÷"
  ) {
    resultDisplayed = false;
    displayScreen.textContent += e.target.textContent;
  }
  // if none of the above happens you start at 0
  else startCalc(e);
};

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", enteringNumbs);
}

//function to add numbers
//will need a current value and previous value
//when I press equals it will trigger the answer only if there is a + there
const addition = (e) => {};
