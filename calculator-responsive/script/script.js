const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";
let shouldClearDisplay = false;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonText = button.getAttribute("data-value");

        if (buttonText.match(/[0-9]/)) {
            if (shouldClearDisplay) {
                display.value = "";
                shouldClearDisplay = false;
            }
            display.value += buttonText;
        } else if (buttonText === "C") {
            display.value = "0";
            currentInput = "";
            currentOperator = "";
        } else if (buttonText === "=") {
            if (currentOperator && currentInput) {
                const result = calculate(parseFloat(currentInput), currentOperator, parseFloat(display.value));
                display.value = result;
                currentInput = result;
                currentOperator = "";
                shouldClearDisplay = true;
            }
        } else {
            currentOperator = buttonText;
            currentInput = display.value;
            shouldClearDisplay = true;
        }
    });
});

function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error";
            }
        default:
            return num2;
    }
}