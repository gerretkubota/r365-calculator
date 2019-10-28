/* eslint-disable prettier/prettier */
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
 * This regex will look for 1 custom delimiter set by user
 * //{delimiter}\n{numbers}
 */
const reqSixRegex = new RegExp('\/\/.\\n.*');
/**
 * @description
 * This regex will look for 1 custom delimiter set by user
 * //{delimiter}\n{numbers} GLOBALLY
 */
const multiReqSixRegex = new RegExp('\/\/.\\n.*', 'g');
/**
 * @description
 * 
 */
const findReqSixDelimiter = new RegExp('\/\/.\\n');
/**
 * @description
 * This regex will look for a custom delimiter with any length set by user
 */
// eslint-disable-next-line prettier/prettier
const reqSevenRegex = new RegExp('\/\/\\[.+\\]\\n.*');
/**
 * @description
 */
const findReqSevenDelimiter = new RegExp('\/\/\\[.+\\]\\n');
/**
 * @description
 * This regex will look for a custom delimiter with any length set by user
 * //[{delimiter}]\n{numbers} GLOBALLY
 */
const multiReqSevenRegex = new RegExp('\/\/\\[.+\\]\\n.*', 'g');

/*
const str = '//[h]\n4';
const reqSevenRegex = new RegExp('//\\[.+\\]\\n.*');
const result = str.match(reqSevenRegex);
const delimiter = str.match(new RegExp('//\\[.+\\]\\n'))
console.log(delimiter[0])
console.log(delimiter[0].length)
// console.log(str.match(reqSevenRegex));
 */
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
  // console.log('multireqsixmatch', multiReqSixMatch);
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
/**
 * 
 * @param {string} userInput 
 * @param {object} delimiterRegex
 * @param {object} multiReqRegex
 * This function will create matchedInfo objects that consist with
 * the matchedIndex value and the regex that it consists with.
 * The startIndex, endIndex, and combinedRegex will be assigned with values in other functions.
 * This function will consider requirements 3, 6, and 7.
 * The reason for multiReqMatch is to find if there are more than 1 of the same regex on the same,
 * if there are multiple regex that are the same, throw an error
 */
const createCustomRegexForAll = (userInput, delimiterRegex, multiReqRegex) => {
  const multiReqMatch = userInput.match(multiReqRegex);
  const reqMatchStr = userInput.match(delimiterRegex);
  const matchedInfo = { startIndex: -1, endIndex: -1, matchedIndex: -1, customRegex: '', combinedRegex: '', fullLength: 0 };
  if (multiReqMatch && reqMatchStr) {
    if (multiReqMatch.length === 1) {
      const matched = reqMatchStr[0];
      const matchedIndex = reqMatchStr.index;
      let customRegex = '';
      // we know that a length of 4 will always be a delimiter for requirement three
      // so the delimiter will be positioned at index 2
      if (matched[2] !== '[' && matched.indexOf('\n') === 3) {
        // const startIndex = matched.length - 2 - 1;
        // matchedInfo.startIndex = startIndex;
        customRegex += `[${matched[2]}]`;
      }
      // if the length is > 5 then we know that the delimiter is for requirement 7 and up
      // and because the delimters will be grouped in brackets, we know that the delimiter will
      // start at index 3 and end at the position of length - 3
      // separate them by brackets with another regex
      else {
        customRegex += `[${matched.substring(3, matched.length - 2)}]`;
      }

      matchedInfo.matchedIndex = matchedIndex;
      matchedInfo.customRegex = customRegex;
      matchedInfo.fullLength = matched.length + matchedIndex;

      return matchedInfo;
    } 
    
    throw Error(
        'Cannot create multiple custom delimiters in new lines or same line'
    );
  }
  return null;
}
/**
 * 
 * @param {string} userInput
 * @param {object} reqMatch
 * This function will split the userInput within an explicit range
 * and combinedRegex that was formed from the passed reqMatch object
 */
const createStr = (userInput, reqMatch) => {
  if (reqMatch) {
    return userInput.substring(reqMatch.startIndex, reqMatch.endIndex)
                    .split(new RegExp(reqMatch.combinedRegex));
  }

  return null;
}
/**
 * 
 * @param {string} userInput 
 * @param {object} reqThreeMatch 
 * @param  {...object} args 
 * This function will sort reqThreeMatch, reqSixMatch, and reqSevenMatch
 * in ascending order.
 * This will help identify when and where to apply its customRegex/combinedRegex in input
 */
const sortOrder = (userInput, reqThreeMatch, ...args) => {
  const indexes = [];
  const result = [];
  // args[0] is reqSixMatch, args[1] is reqSevenMatch
  const reqMatches = args;
  for (let i = 0; i < reqMatches.length; i++) {
    const currReqMatch = reqMatches[i];
    if (currReqMatch) {
      indexes.push(currReqMatch.matchedIndex);
    }
  }
  // sort indexes if indexes exist
  if (indexes.length) {
    indexes.sort((a, b) => a - b);
  }
  // check if the first element of indexes is a 0 or not,
  // if it's not, then we know that reqThreeRegex will be applied from start of userInput string
  // (delimiter of comma and newline)
  if (indexes[0] !== 0 || !indexes.length ) {
    reqThreeMatch.startIndex = 0;
    reqThreeMatch.endIndex = indexes[0];
    reqThreeMatch.customRegex = '[,\\n]';
    result.push({...reqThreeMatch});
  }
  for (let i = 0; i < indexes.length; i++) {
    for(let j = 0; j < reqMatches.length; j++) {
      // if we know that the first value of the sortedIndex is not 0 then we can apply
      // the initial regex value from 0 to indexes[0]
      if (reqMatches[j]) {
        if (indexes[i] === reqMatches[j].matchedIndex) {
          // console.log('oh hi',reqMatches[i])
          reqMatches[j].startIndex = reqMatches[j].fullLength;
          reqMatches[j].endIndex = i + 1 === indexes.length ? userInput.length + 1 : indexes[i + 1];
          result.push({...reqMatches[j]});
        }
      }
    }
  }
  return result;
}
/**
 * 
 * @param {array} sortedReq 
 * This function will help create/assign a combinedRegex to the objects
 * in respect to the ascending order.
 * Delimiter constraints may be wirtten in random order, so combine regex accordingly
 * Build off of the standardRegex to combine the current object's customRegex
 */
const createRegexStr = sortedReq => {
  let standardRegex = '[,\\n]';

  if (sortedReq.length === 1) {
    if (sortedReq[0].customRegex !== standardRegex) {
      const finalRegex = `${standardRegex}|${sortedReq[0].customRegex}`;
      sortedReq[0].combinedRegex = finalRegex;
    } else {
      sortedReq[0].combinedRegex = standardRegex;
    }
    return;
  }
  for (let i = 0; i < sortedReq.length; i++) {
    const currentReqObj = sortedReq[i];
    if (currentReqObj.customRegex !== standardRegex) {
      standardRegex += `|${currentReqObj.customRegex}`
    }
    currentReqObj.combinedRegex = standardRegex;
  }
}
/**
 * 
 * @param {array} parsedStrFromRegex 
 * This function will calculate the sum
 */
const calculateAllRegex = parsedStrFromRegex => {
  let sum = 0;
  const arrOfRegex = parsedStrFromRegex;
  const { length } = arrOfRegex;
  for (let i = 0; i < length; i++) {
    const curr = arrOfRegex[i];
    if (curr.length === 1) {
      sum = checkError(curr);
    } else {
      sum += addReqFive(curr);
    }
  }
  return sum;
}
/**
 *
 * @param {string} userInput
 * This function will look for previous delimiter requirements,
 * 1 custom delimiter that is provided, and a custom delimiter with any length.
 * Will finalize calculation by applying the above requirements.
 */
const calculateSeven = userInput => {
  try {
    const reqThreeMatch = { startIndex: -1, endIndex: -1, matchedIndex: -1, customRegex: '[,\\n]', fullLength: 0 }
    const reqSixMatch = createCustomRegexForAll(userInput, findReqSixDelimiter, multiReqSixRegex);
    const reqSevenMatch = createCustomRegexForAll(userInput, findReqSevenDelimiter, multiReqSevenRegex);
    const sortedReq = sortOrder(userInput, reqThreeMatch, reqSixMatch, reqSevenMatch);
    createRegexStr(sortedReq);
    // parsedStrFromRegex holds an array of strings that have been parsed from various requirements above
    const parsedStrFromRegex = sortedReq.reduce((arrOfStr, currRegex) => {
      arrOfStr.push(createStr(userInput, currRegex));
      return arrOfStr;
    }, []);
    return calculateAllRegex(parsedStrFromRegex);
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
  calculateSeven,
};
