const userInput = document.querySelector('#user-input');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const resultsDiv = document.querySelector('#results-div');

const clickCheckBtn = (e) => {
    let input = userInput.value;
    if (input.trim().length === 0) {
        alert('Please provide a phone number');
        return;
    }
    const firstNumbers = '([\\d]{3}|\\([\\d]{3}\\))';
    const middleNumbers = '([\\d]{3})';
    const lastNumbers = '([\\d]{4})';
    let usNumberChecker = new RegExp(`^1?\\s?${firstNumbers}[-\\s]?${middleNumbers}[-\\s]?${lastNumbers}$`);
    resultsDiv.textContent = usNumberChecker.test(input) ? 'Valid' : 'Invalid';
    resultsDiv.textContent += ' US number: ' + input;
}

const clickClearBtn = (e) => {
    resultsDiv.textContent = "";
}

checkBtn.addEventListener('click', clickCheckBtn);
clearBtn.addEventListener('click', clickClearBtn);
