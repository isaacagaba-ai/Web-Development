let display = document.getElementById("display");
let expression = "";

// Add numbers and operators to display
function appendValue(value) {

    if (expression === "Error") {
        expression = "";
    }

    expression += value;

    display.innerText = expression;
}


// Clear calculator
function clearDisplay() {

    expression = "";
    display.innerText = "0";
}


// Calculate answer
function calculate() {

    try {

        if (expression === "") {
            return;
        }

        // Convert percentage
        let calculation = expression.replace(/%/g, "/100");

        let result = eval(calculation);

        if (!isFinite(result)) {
            display.innerText = "Error";
            expression = "Error";
            return;
        }

        display.innerText = result;
        expression = result.toString();

    } catch (error) {

        display.innerText = "Error";
        expression = "Error";
    }
}