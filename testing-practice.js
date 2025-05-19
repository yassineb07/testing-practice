const capitalize = (string) => {
  if (string === '') return '';
  const firstLetterCapitalized = string.at().toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  return firstLetterCapitalized.concat(restOfString);
};

export { capitalize };
