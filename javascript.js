let num1;
let num2;
let operator;

const display = document.querySelector(".calculator-display p");

document.querySelectorAll('.calculator-row button').forEach(button => {
  button.addEventListener('click', () => {
    const input = button.value || button.textContent;
    if (input === "=") {
      const arr = display.textContent.match(/([0-9.]+)([+\-×/])([0-9.]+)/);
      num1 = Number(arr[1]);
      operator = arr[2];
      num2 = Number(arr[3]);
      display.textContent = operate(operator, num1, num2);
    } else if (input === "C") {
      display.textContent = "0";
    } else if (display.textContent === "0") {
      display.textContent = input;
    } else {
      display.textContent += input; 
    };
  });
});

function operate(operator, num1, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0){
        return "Error";
      } else
      return num1 / num2;
    default:
      return "Error";
  }
}

