// Get the display screen
let display = document.getElementById('Input-field');
let currentNumber = '0';
let previousNumber = '';
let operation = '';

// Add click events to all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        let buttonText = this.textContent;

        // Check what type of button was clicked
        if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
            addNumber(buttonText);
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '×' || buttonText === '÷' || buttonText === '%' || buttonText === '^') {
            setOperation(buttonText);
        } else if (buttonText === '=') {
            calculate();
        } else if (buttonText === '➤') {
            clearAll();
        }
    });
});

// Function to add numbers to display
function addNumber(num) {
    if (currentNumber === '0') {
        currentNumber = num;
    } else {
        currentNumber = currentNumber + num;
    }
    display.value = currentNumber;
}

// Function to set the operation
function setOperation(op) {
    if (previousNumber !== '' && currentNumber !== '') {
        calculate(); // Do the previous calculation first
    }
    previousNumber = currentNumber;
    currentNumber = '0';
    operation = op;
}

// Function to do the math
function calculate() {
    let result;
    let prev = parseFloat(previousNumber);
    let current = parseFloat(currentNumber);

    if (operation === '+') {
        result = prev + current;
    } else if (operation === '-') {
        result = prev - current;
    } else if (operation === '×') {
        result = prev * current;
    } else if (operation === '÷') {
        result = prev / current;
    } else if (operation === '%') {
        result = (prev * current) / 100;
    } else if (operation === '^') {
        result = Math.pow(prev, current);
    }

    currentNumber = result.toString();
    display.value = currentNumber;
    previousNumber = '';
    operation = '';
}

// Function to clear everything
function clearAll() {
    currentNumber = '0';
    previousNumber = '';
    operation = '';
    display.value = '0';
}