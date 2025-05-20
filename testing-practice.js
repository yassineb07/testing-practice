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
export { capitalize, reverseString };
