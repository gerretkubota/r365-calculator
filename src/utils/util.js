/**
 * @description
 * This regex will look for a comma
 */
const reqOneRegex = new RegExp('[,]');
/**
 *
 * @description
 * This regex will look for a comma
 */
const reqTwoRegex = new RegExp('[,]');
/**
 *
 * @description
 * This regex will look for a comma and a new line as its delimiter
 */
const reqThreeRegex = new RegExp('[,\\n]');
/**
 *
 * @param {array} values
 * This function will reduce valid numbers to a single sum -
 * by calculating only 2 numbers
 */
const addReqOne = values => {
  let count = 0;
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
 * @param {array} values
 * This function will reduce valid numbers to a single sum
 */
const addReqTwo = values => {
  const sum = values.reduce((total, currentVal) => {
    const num = Number(currentVal);
    if (Number.isNaN(num) || currentVal === '') {
      return total;
    }
    return total + num;
  }, 0);
  return sum;
};
/**
 *
 * @param {*} values
 * The function will reduce valid numbers to a single sum
 */
const addReqThree = values => {
  const sum = values.reduce((total, currentVal) => {
    const num = Number(currentVal);
    if (Number.isNaN(num) || currentVal === '') {
      return total;
    }
    return total + num;
  }, 0);
  return sum;
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
  return addReqOne(reqOneMatch);
};
/**
 *
 * @param {string} userInput
 * This function will check the regex of the second requirement reqTwoRegex -
 * that checks if there are more than 2 numbers in userInput.
 */
const calculateTwo = userInput => {
  const reqTwoMatch = userInput.split(reqTwoRegex);
  if (reqTwoMatch.length === 1) {
    return Number(userInput) || 0;
  }
  return addReqTwo(reqTwoMatch);
};
/**
 *
 * @param {string} userInput
 * This function will check the regex of the third requirement reqThreeRegex -
 * that checks if the numbers in the string contain delimiteres of newline and comma.
 */
const calculateThree = userInput => {
  const reqThreeMatch = userInput.split(reqThreeRegex);
  if (reqThreeMatch.length === 1) {
    return Number(userInput) || 0;
  }
  return addReqThree(reqThreeMatch);
};

module.exports = { calculateOne, calculateTwo, calculateThree };
