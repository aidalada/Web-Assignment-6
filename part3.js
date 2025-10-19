function boxHover() {
    const box = document.getElementById('hover-box');
    box.style.backgroundColor = 'red';
    box.textContent = 'Держиии!';
}

function boxLeave() {
    const box = document.getElementById('hover-box');
    box.style.backgroundColor = '#dddddd';
    box.textContent = 'Good job';
}



function showInput(element) {
    const output = document.getElementById('real-time-output');
    output.textContent = element.value;
}



function calculate() {
    const num1_string = document.getElementById('num1').value;
    const num2_string = document.getElementById('num2').value;
    const operator = document.getElementById('operator').value;
    
    const num1 = parseFloat(num1_string);
    const num2 = parseFloat(num2_string);
    
    let result;
    
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    
    const resultSpan = document.getElementById('calc-result');
    resultSpan.textContent = result;
}