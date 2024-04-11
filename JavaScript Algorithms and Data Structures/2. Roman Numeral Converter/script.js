const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanNotation = {
    1: {
        1: 'I',
        5: 'V',
        10: 'X'
    },
    10: {
        1: 'X',
        5: 'L',
        10: 'C'
    },
    100: {
        1: 'C',
        5: 'D',
        10: 'M'
    },
    1000: {
        1: 'M'
    }
}
const romanNumberConstructor = (romanDecimalPlace, number) => {
    switch (number) {
        case 0:
            return "";
        case 1:
            return romanDecimalPlace['1'];
        case 2:
            return romanDecimalPlace['1'] + romanDecimalPlace['1'];
        case 3:
            return romanDecimalPlace['1'] + romanDecimalPlace['1'] + romanDecimalPlace['1'];
        case 4:
            return romanDecimalPlace['1'] + romanDecimalPlace['5'];
        case 5:
            return romanDecimalPlace['5'];
        case 6:
            return romanDecimalPlace['5'] + romanDecimalPlace['1'];
        case 7:
            return romanDecimalPlace['5'] + romanDecimalPlace['1'] + romanDecimalPlace['1'];
        case 8:
            return romanDecimalPlace['5'] + romanDecimalPlace['1'] + romanDecimalPlace['1'] + romanDecimalPlace['1'];
        case 9:
            return romanDecimalPlace['1'] + romanDecimalPlace['10'] 
        default:
            console.log('Invalid number: ' + number);
    }
}

const clickConvertBtn = (e) => {
    let numberInput = parseInt(number.value.trim());
    if (isNaN(numberInput)) {
        output.textContent = "Please enter a valid number";
        return;
    }
    if (numberInput < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
        return;
    }
    if (numberInput > 3999) {
        output.textContent = "Please enter a number less than or equal to 3999";
        return;
    }
    let decimalPlace = 1;
    let stringResult = "";
    while (numberInput > 0) {
        stringResult = romanNumberConstructor(romanNotation[decimalPlace] ,numberInput % 10) + stringResult;
        numberInput = Math.floor(numberInput / 10);
        decimalPlace *= 10;
    }
    output.textContent = stringResult;
}

convertBtn.addEventListener('click', clickConvertBtn);

