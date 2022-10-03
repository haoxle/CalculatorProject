const acBtn = document.querySelector("#gbac");
const displayScreen = document.querySelector("#gbbb");
const numbers = Array.from(document.querySelectorAll(".numBtn"));
const operator = Array.from(document.querySelectorAll(".operator"));
const equals = document.querySelector(".equalsBtn");

console.log(operator);
console.log(numbers);

//giving an initial value (will change as you use the calculator)
let resultDisplayed = false;
displayScreen.innerText = null;

//When you click AC it will turn the calculator on and give you 0
const startCalc = (e) => {
  e.preventDefault();
  displayScreen.textContent = 0;
};
acBtn.addEventListener("click", startCalc);

//Enter numbers 0-9, can enter a lot of numbers
const enteringNumbs = (e) => {
  // Storing the currently displayed number and related unknown
  const currNum = displayScreen.textContent;
  const lastNum = currNum[currNum.length - 1];

  //this gets rid of the 0 when you add numbers
  if (currNum[0] === "0") {
    displayScreen.textContent = "";
  }

  //this allows you to add a sequence of numbers as we have initialised the output as false
  if (resultDisplayed === false) {
    displayScreen.textContent += e.target.textContent;
    //as you have entered numbers if the last output is an operator it will set the resultdisplayed as false and allow you to add more numbers
  } else if (
    (resultDisplayed === true && lastNum == "+") ||
    lastNum == "-" ||
    lastNum == "x" ||
    lastNum == "÷"
  ) {
    // this statement and the resultdisplayed on line 37 does not make a difference to the function, however for correctness it exists, when you press op  it will set result displayed to false
    resultDisplayed = false;
    displayScreen.textContent += e.target.textContent;
  } else startCalc(e);
};

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", enteringNumbs);
}

//This is similar to previous but allows to insert the operator iteself
const getOperator = (e) => {
  const currNum = displayScreen.textContent;
  const lastNum = currNum.substring(currNum.length - 3);
  //if the last number is an operator and you click on another operator, it will replace the previous operator with a new one.
  if (
    lastNum === " + " ||
    lastNum === " - " ||
    lastNum === " x " ||
    lastNum === " ÷ "
  ) {
    const newNum =
      currNum.substring(0, currNum.length - 3) +
      " " +
      e.target.textContent +
      " ";
    displayScreen.textContent = newNum;
    // 1 + = 0
  } else if (currNum.length == 0) {
    startCalc(e);

    //if there is no operator there, it will add an operator to the end
  } else displayScreen.textContent += ` ${e.target.textContent} `;
};
for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", getOperator);
}

//this is the equals function
const calcAns = (e) => {
  // note the previous i added spaces to allow the .split method pulls into a string
  const arrInString = displayScreen.textContent.split(" ");
  console.log(arrInString);
  const x = Number(arrInString[0]);
  const y = Number(arrInString[2]);
  // self explanatory
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
