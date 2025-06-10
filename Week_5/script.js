const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.btn.number, #decimal');
const operatorButtons = [
    document.getElementById('add'),
    document.getElementById('subtract'),
    document.getElementById('multiply'),
    document.getElementById('divide')
];
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;

// Number and decimal button handlers
numberButtons.forEach(button => {
    button.addEventListener('click', function() {
        if (display.innerText === '0' || waitingForSecondOperand) {
            display.innerText = button.innerText;
            waitingForSecondOperand = false;
        } else {
            display.innerText += button.innerText;
        }
    });
});

// Operator button handlers
operatorButtons.forEach(button => {
    button.addEventListener('click', function() {
        firstOperand = parseFloat(display.innerText);
        operator = button.innerText;
        waitingForSecondOperand = true;
    });
});

// AC button event handler
document.getElementById('ac').addEventListener('click', function() {
    display.innerText = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
});