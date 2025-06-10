const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn.number, #decimal');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (display.innerText === '0') {
            display.innerText = button.innerText;
        } else {
            display.innerText += button.innerText;
        }
    });
});


document.getElementById('ac').addEventListener('click', function() {
    display.innerText = '0';
});