const acBtn = document.querySelector("#gbac");
const displayScreen = document.querySelector("#gbbb");
const numbers = Array.from(document.querySelectorAll(".numBtn"));
const operator = Array.from(document.querySelectorAll(".operator"));
const equals = document.querySelector(".equalsBtn");

let resultDisplayed = false;
console.log(operator);
console.log(numbers);
displayScreen.innerText = null;

const startCalc = (e) => {
  e.preventDefault();
  displayScreen.textContent = 0;
};

acBtn.addEventListener("click", startCalc);

const enteringNumbs = (e) => {
  const currNum = displayScreen.textContent;
  const lastNum = currNum[currNum.length - 1];

  if (currNum[0] === "0") {
    displayScreen.textContent = "";
  }

  if (resultDisplayed === false) {
    displayScreen.textContent += e.target.textContent;
  } else if (
    (resultDisplayed === true && lastNum == "+") ||
    lastNum == "-" ||
    lastNum == "x" ||
    lastNum == "÷"
  ) {
    resultDisplayed = false;
    displayScreen.textContent += e.target.textContent;
  } else startCalc(e);
};

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", enteringNumbs);
}

const getOperator = (e) => {
  const currNum = displayScreen.textContent;
  const lastNum = currNum.substring(currNum.length - 3);
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
