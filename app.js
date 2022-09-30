//when I click on a button, it goes onto the div screen: start by doing..

// Create the query selector for each element
const acBtn = document.querySelector("#gbac");
const displayScreen = document.querySelector("#gbbb");
const numbers = Array.from(document.querySelectorAll(".numBtn"));
const operator = Array.from(document.querySelectorAll(".operator"));
const equals = document.querySelector(".equalsBtn");

let resultDisplayed = false;
console.log(operator);
console.log(numbers);
//Set the screen to null?
displayScreen.innerText = null;

//When you press AC it turns screen to zero
const startCalc = (e) => {
  event.preventDefault();
  displayScreen.textContent = 0;
};

acBtn.addEventListener("click", startCalc);

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

//function to use operators, previous function can work?

const getOperator = (e) => {
  //storage as above
  const currNum = displayScreen.textContent;
  const lastNum = currNum.substring(currNum.length - 3);
  console.log(lastNum);
  if (
    lastNum === " + " ||
    lastNum === " - " ||
    lastNum === " x " ||
    lastNum === " ÷ "
  ) {
    //adding substring returns all of the first sequence of numbers
    const newNum =
      currNum.substring(0, currNum.length - 3) +
      " " +
      e.target.textContent +
      " ";
    displayScreen.textContent = newNum;
  } else if (currNum.length == 0) {
    startCalc(e);
  } else displayScreen.textContent += ` ${e.target.textContent} `;
};
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", getOperator);
}

const calcAns = (e) => {
  const arrInString = displayScreen.textContent.split(" ");
  console.log(arrInString);
  const x = Number(arrInString[0]);
  const y = Number(arrInString[2]);
  switch (arrInString[1]) {
    case "+":
      displayScreen.textContent = x + y;
      break;
    case "-":
      displayScreen.textContent = x - y;
      break;
    case "x":
      displayScreen.textContent = x * y;
      break;
    case "÷":
      displayScreen.textContent = x / y;
      break;
    default:
      displayScreen.textContent = "0";
  }
};

equals.addEventListener("click", calcAns);
