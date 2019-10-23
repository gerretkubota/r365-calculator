/**
 * @description
 * This regex will look for a comma
 */
const reqOneRegex = new RegExp('[,]');

/**
 *
 * @param {array} values
 * This function will reduce a valid number to a single sum -
 * by calculating only 2 numbers
 */
const add = values => {
  let count = 0;
  console.log('the values', values);
  const sum = values.reduce((total, currentVal) => {
    const num = Number(currentVal);
    count++;
    if (Number.isNaN(num) || currentVal === '') {
      return total;
    }
    return total + num;
  }, 0);
  return count <= 2 ? sum : new Error('Too many numbers or commas provided');
};

/**
 *
 * @param {string} userInput
 * This function will split userInput string by a comma
 */
const calculateOne = userInput => {
  const reqOneMatch = userInput.split(reqOneRegex);
  if (reqOneMatch.length === 1) {
    if (reqOneMatch[0] === '') {
      return new Error('You must enter an input');
    }
    return Number(reqOneMatch[0]) || 0;
  }
  return add(reqOneMatch);
};

module.exports = { add, calculateOne };
