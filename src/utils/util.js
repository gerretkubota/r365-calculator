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
 * This regex will look for a comma and a newline as its delimiter
 */
const reqThreeRegex = new RegExp('[,\\n]');
/**
 * @description
 * This regex will look for a comma, a newline, and a custom delimiter set by user
 * //{delimiter}\n{numbers}
 */
const reqSixRegex = new RegExp('//.\\n.*');
const multiReqSixRegex = new RegExp('//.\\n.*', 'g');
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
 * @param {array} values
 * The function will reduce valid numbers to a single sum
 * No negative numbers are allowed
 */
const addReqFour = values => {
  const negativeNumArr = [];
  const sum = values.reduce((total, currentVal) => {
    const num = Number(currentVal);
    if (Number.isNaN(num) || currentVal === '') {
      return total;
    }
    if (num < 0) {
      negativeNumArr.push(num);
    }
    return total + num;
  }, 0);
  if (negativeNumArr.length === 0) {
    return sum;
  }
  const negativeStr = negativeNumArr.join(',');
  return new Error(`Negative numbers are not allowed: ${negativeStr}`);
};
/**
 *
 * @param {array} values
 * The function will reduce valid numbers to a single sum
 * No negative numbers are allowed
 * No numbers > 1000 are allowed
 */
const addReqFive = values => {
  const negativeNumArr = [];
  const sum = values.reduce((total, currentVal) => {
    const num = Number(currentVal);
    if (Number.isNaN(num) || currentVal === '' || currentVal > 1000) {
      return total;
    }
    if (num < 0) {
      negativeNumArr.push(num);
    }
    return total + num;
  }, 0);
  if (negativeNumArr.length > 0) {
    const negativeStr = negativeNumArr.join(',');
    throw Error(`Negative numbers are not allowed: ${negativeStr}`);
  }
  return sum;
};
/**
 *
 * @param {array} values
 */
const prevAddReq = values => {
  const negativeNumArr = [];
  const sum = values.reduce((total, currentVal) => {
    const num = Number(currentVal);
    if (Number.isNaN(num) || currentVal === '' || currentVal > 1000) {
      return total;
    }
    if (num < 0) {
      negativeNumArr.push(num);
    }
    return total + num;
  }, 0);
  if (negativeNumArr.length === 0) {
    return sum;
  }
  const negativeStr = negativeNumArr.join(',');
  return new Error(`Negative numbers are not allowed: ${negativeStr}`);
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
 * that checks if the numbers in the string contain delimiters of newline and comma.
 */
const calculateThree = userInput => {
  const reqThreeMatch = userInput.split(reqThreeRegex);
  if (reqThreeMatch.length === 1) {
    return Number(userInput) || 0;
  }
  return addReqThree(reqThreeMatch);
};
/**
 *
 * @param {string} userInput
 * This function will check the regex of the fourth requirement by reusing -
 * reqThreeRegex and checking for negative numbers in a string that contain
 * delimiters of newline and comma.
 */
const calculateFour = userInput => {
  const reqFourMatch = userInput.split(reqThreeRegex);
  if (reqFourMatch.length === 1) {
    const value = Number(reqFourMatch[0]);
    if (value < 0) {
      return new Error(`Negative numbers are not allowed: ${value}`);
    }
    if (value > 0) {
      return value;
    }

    return 0;
  }
  return addReqFour(reqFourMatch);
};
/**
 *
 * @param {string} userInput
 * This function will check the regex of the fourth requirement by reusing -
 * reqThreeRegex, checking for negative numbers, and numbers > 1000 in a string that contain
 * delimiters of newline and comma.
 */
const calculateFive = userInput => {
  try {
    const reqFiveMatch = userInput.split(reqThreeRegex);
    if (reqFiveMatch.length === 1) {
      const value = Number(reqFiveMatch[0]);
      if (value < 0) {
        throw Error(`Negative numbers are not allowed: ${value}`);
      }
      if (value > 0 && value < 1000) {
        return value;
      }

      return 0;
    }
    return addReqFive(reqFiveMatch);
  } catch (e) {
    return e;
  }
};
/**
 *
 * @param {string} userInput
 * This function will find the reqSixRegex, if not found, no reqSixRegex in string
 * If found, append the custom delimiter to the previous delimiters
 * Return the new customregex along with the index position of where the delimiter was found
 */
const createCustomRegex = userInput => {
  const reqSixMatch = userInput.match(reqSixRegex);
  const multiReqSixMatch = userInput.match(multiReqSixRegex);
  console.log('multireqsixmatch', multiReqSixMatch);
  let customRegex = '[,\\n]';
  if (multiReqSixMatch && reqSixMatch) {
    if (multiReqSixMatch.length === 1) {
      const matched = reqSixMatch[0];
      // reqSixMatch[1] + 1 is where formula starts
      const foundIndex = reqSixMatch.index;
      const matchIndex = foundIndex;
      customRegex += `|[${matched[2]}]`;
      return { matchIndex, customRegex };
    }
    if (multiReqSixMatch.length >= 2) {
      throw Error(
        'Cannot create multiple custom delimiters in new lines or same line'
      );
    }
  }
  return null;
};
/**
 *
 * @param {array} reqMatch
 * This function will check if the single number meets the requirements of:
 * Not exceeding 1000 or negative number
 */
const checkError = reqMatch => {
  const value = Number(reqMatch[0]);
  if (value < 0) {
    throw Error(`Negative numbers are not allowed: ${value}`);
  }
  if (value > 0 && value < 1000) {
    return value;
  }

  return 0;
};
/**
 *
 * @param {string} userInput
 * This function will look for previous delimiter requirements,
 * as well as 1 custom delimiter that is provided and finally do calculation
 */
const calculateSix = userInput => {
  try {
    const reqSixMatch = createCustomRegex(userInput);
    if (reqSixMatch === null) {
      // if there are no matches, utitlize previous calculateFive function
      return calculateFive(userInput);
    }
    const { matchIndex, customRegex } = reqSixMatch;
    // With matchIndex we know that the custom delimiter starts at that index
    // So calculate everything from 0 to matchIndex
    const reqThreeMatch = userInput
      .substring(0, matchIndex)
      .split(reqThreeRegex);
    // Calculate from matchIndex to end of userInput string
    const reqSixStr = userInput
      .substring(matchIndex + 2, userInput.length)
      .split(new RegExp(customRegex));
    const originalCalc =
      reqThreeMatch.length === 1
        ? checkError(reqThreeMatch)
        : addReqFive(reqThreeMatch);
    const calcWithCustomRegex =
      reqSixStr.length === 1 ? checkError(reqSixStr) : addReqFive(reqSixStr);
    return originalCalc + calcWithCustomRegex;
  } catch (e) {
    return e;
  }
};
module.exports = {
  calculateOne,
  calculateTwo,
  calculateThree,
  calculateFour,
  calculateFive,
  calculateSix,
};
