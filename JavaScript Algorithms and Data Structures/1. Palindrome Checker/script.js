const textInput = document.querySelector('#text-input');
const checkBtn = document.querySelector('#check-btn');
const result = document.querySelector('#result');

checkBtn.addEventListener('click', checkBtnClick);

function checkBtnClick(event) {
  const text = textInput.value;
  const normText = normalizeText(textInput.value);
  if (normText) {
    let isPalindrome = true;
    const limit = Math.floor(normText.length / 2);
    console.log(`Normalize text: ${normText}`);
    for (let i = 0; i < limit; i++) {
      if (normText.charAt(i) !== normText.charAt(normText.length - 1 - i)) {
        isPalindrome = false;
        break;
      }
    }
    result.textContent = `${text} ${isPalindrome ? 'is' : 'is not'} a palindrome`;
  } else {
    alert("Please input a value");
  }
}

// Remove all accents/diacritics, leading and trailing white space and returned in lower case
function normalizeText(text) {
  return text
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\\/()?¿!¡\s,._-]/g, "")
    .toLowerCase();
}