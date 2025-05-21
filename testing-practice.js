const capitalize = (string) => {
  if (string === '') return '';
  const firstLetterCapitalized = string.at().toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  return firstLetterCapitalized.concat(restOfString);
};

const reverseString = (string) => {
  let reversedString = '';
  for (let index = string.length - 1; index >= 0; index--) {
    let char = string[index];
    reversedString += char;
  }
  return reversedString;
};

const calculator = () => {
  const add = (a, b) => {
    return a + b;
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  const divide = (a, b) => {
    return a / b;
  };
  return { add, subtract, multiply, divide };
};

// caesar cipher
const isLetter = (uniCode) => {
  if ((uniCode >= 65 && uniCode <= 90) || (uniCode >= 97 && uniCode <= 122))
    return true;
  else return false;
};

const shift = (char, shiftFactor) => {
  let uniCode = char.charCodeAt();
  //check if char is a letter
  if (isLetter(uniCode)) {
    let shiftedUniCode = uniCode + shiftFactor;
    // check if shifted char is a letter
    if (isLetter(shiftedUniCode)) {
      return String.fromCharCode(shiftedUniCode);
    } else {
      //check lowercase letters
      if (uniCode >= 97 && shiftedUniCode > 122) {
        shiftedUniCode = shiftedUniCode - 122 + 96;
      }
      // check uppercase letters
      if (uniCode <= 90 && shiftedUniCode > 90) {
        shiftedUniCode = shiftedUniCode - 90 + 64;
      }
    }
    return String.fromCharCode(shiftedUniCode);
  }
  return char;
};

const caesarCipher = (string, shiftFactor) => {
  let shiftedString = '';
  for (let char of string) {
    let shiftedChar = shift(char, shiftFactor);
    shiftedString += shiftedChar;
  }
  return shiftedString;
};

export { capitalize, reverseString, calculator, caesarCipher };
