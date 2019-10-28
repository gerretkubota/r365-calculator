const {
  calculateOne,
  calculateTwo,
  calculateThree,
  calculateFour,
  calculateFive,
  calculateSix,
  calculateSeven,
} = require('../utils/util.js');

describe('Calculate One', () => {
  it('Should add two numbers that are separated by a delimiter of comma', () => {
    expect(calculateOne('1,3')).toEqual(4);
  });
  it('Should convert non-number to 0', () => {
    expect(calculateOne('kjsf123kj1,3')).toEqual(3);
  });
  it('Should add two large numbers', () => {
    expect(calculateOne('5678,32143')).toEqual(37821);
  });
  it('Should convert any string with whitespace to 0, since it is a non-number', () => {
    expect(calculateOne('4 2,4')).toEqual(4);
  });
  it('Should convert any string with whitespace to 0, since it is a non-number', () => {
    expect(calculateOne('2,4 2')).toEqual(2);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateOne(',3,4,')).toEqual(
      new Error('Too many numbers or commas provided')
    );
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateOne('3,,4')).toEqual(
      new Error('Too many numbers or commas provided')
    );
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateOne('3k')).toEqual(0);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateOne(',3')).toEqual(3);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateOne(',')).toEqual(0);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateOne('')).toEqual(new Error('You must enter an input'));
  });
  it('Should only return the original number if the string does not contain any delimiter', () => {
    expect(calculateOne('2')).toEqual(2);
  });
  it('Should only accept two numbers separated by one delimiter of comma', () => {
    expect(calculateOne('22,22,22,22')).toEqual(
      new Error('Too many numbers or commas provided')
    );
  });
});

describe('Calculate Two', () => {
  it('Should add two numbers that are separated by a delimiter of comma', () => {
    expect(calculateTwo('1,3')).toEqual(4);
  });
  it('Should add three numbers that are separated by a delimiter of comma', () => {
    expect(calculateTwo('1,3,1')).toEqual(5);
  });
  it('Should add four numbers that are separated by a delimiter of comma', () => {
    expect(calculateTwo('1,3,1,2')).toEqual(7);
  });
  it('Should add ten numbers that are separated by a delimiter of comma', () => {
    expect(calculateTwo('1,33,1,2321,10,54,900,-7,-60,0')).toEqual(3253);
  });
  it('Should convert non-number to 0', () => {
    expect(calculateTwo('kjsf123kj1,3,1klx,!kj@#!@#')).toEqual(3);
  });
  it('Should convert any string with whitespace to 0, since it is a non-number', () => {
    expect(calculateTwo('4 2,4')).toEqual(4);
  });
  it('Should convert any string with whitespace to 0, since it is a non-number', () => {
    expect(calculateTwo('2,4 2')).toEqual(2);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateTwo(',3,4,')).toEqual(7);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateTwo('3,,4')).toEqual(7);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateTwo(',,,,,,,3,,,,,,4,,,,')).toEqual(7);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateTwo(',!&,!!@#,,,3,,,,,,4,,,,$')).toEqual(7);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateTwo('3k')).toEqual(0);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateTwo(',3')).toEqual(3);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateTwo('')).toEqual(0);
  });
  it('Should only return the original number if the string does not contain any delimiter', () => {
    expect(calculateTwo('2')).toEqual(2);
  });
});

describe('Calculate Three', () => {
  it('Should add three numbers that are separated by delimiters of newline and comma', () => {
    expect(calculateThree('1\n2,3')).toEqual(6);
  });
  it('Should add ten numbers that are separated by delimiters of newline and comma ', () => {
    expect(calculateThree('\n4,5,\n\n,6,7,8,9,10,\n\n11,12,13')).toEqual(85);
  });
  it('Should add ten numbers that are separated by delimiters of newline and comma ', () => {
    expect(calculateThree('\n4,,-9,10,\n\n11,,13')).toEqual(29);
  });
  it('Should add all numbers separated by delimiters of newline and comma', () => {
    expect(calculateThree('2\n2\n2\n3,3,3')).toEqual(15);
  });
  it('Should convert non-number to 0', () => {
    expect(
      calculateThree(
        'k2jkvklj22131233kj,!@#,xkjlkvj#$@4\nmkj\nlkjdfkl\n,sdkfj\n\nlksdjf'
      )
    ).toEqual(0);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateThree('3\n\n3,')).toEqual(6);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateThree('')).toEqual(0);
  });
  it('Should only return the original number if the string does not contain any delimiter', () => {
    expect(calculateThree('2')).toEqual(2);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateThree('\n')).toEqual(0);
  });
  it('Should implicitly convert empty space or missing numbers to 0', () => {
    expect(calculateThree('\n\n\n\n\n\n,,,,,\n,\n,\n')).toEqual(0);
  });
  it('Should convert non-numbers to 0', () => {
    expect(calculateThree('50,,,\n\n\n\n20,lkjkslfjk')).toEqual(70);
  });
  it('Should convert non-numbes to 0', () => {
    expect(calculateThree('lkjsflksjd3\n3')).toEqual(3);
  });
});

describe('Calculate Four', () => {
  it('Should not accept any negative numbers', () => {
    expect(calculateFour('-3')).toEqual(
      new Error('Negative numbers are not allowed: -3')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFour('3,,,,,,,2,\n\n3,,,-4\n-10,')).toEqual(
      new Error('Negative numbers are not allowed: -4,-10')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFour('-3,-2,-2,-4')).toEqual(
      new Error('Negative numbers are not allowed: -3,-2,-2,-4')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFour('-3-2-2-4')).toEqual(0);
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFour('\n-4,5,\n\n,6,7,-8,9,10,\n\n11,12,13')).toEqual(
      new Error('Negative numbers are not allowed: -4,-8')
    );
  });
  it('Should convert non-numbers to 0', () => {
    expect(calculateFour('lkjsflksjd3\n3')).toEqual(3);
  });
  it('Should add ten numbers that are separated by delimiters of newline and comma', () => {
    expect(calculateFour('\n4,5,\n\n,6,7,8,9,10,\n\n11,12,13')).toEqual(85);
  });
});

describe('Calculate Five', () => {
  it('Should convert to 0 if numbers are greater than 1000', () => {
    expect(calculateFive('1001')).toEqual(0);
  });
  it('Should convert to 0 if numbers are greater than 1000', () => {
    expect(calculateFive('12398123,12,3\n\n\n,2,,,,,,,\n\n\n\n9')).toEqual(26);
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFive('-3')).toEqual(
      new Error('Negative numbers are not allowed: -3')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFive('3,,,,,,,2,\n\n3,,,-4\n-10,')).toEqual(
      new Error('Negative numbers are not allowed: -4,-10')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFive('-3,-2,-2,-4')).toEqual(
      new Error('Negative numbers are not allowed: -3,-2,-2,-4')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFive('-3-2-2-4')).toEqual(0);
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateFive('\n-4,5,\n\n,6,7,-8,9,10,\n\n11,12,13')).toEqual(
      new Error('Negative numbers are not allowed: -4,-8')
    );
  });
  it('Should convert non-numbers to 0', () => {
    expect(calculateFive('lkjsflksjd3\n3')).toEqual(3);
  });
  it('Should add ten numbers that are separated by delimiters of newline and comma', () => {
    expect(calculateFive('\n4,5,\n\n,6,7,8,9,10,\n\n11,12,13')).toEqual(85);
  });
  it('Should add numbers that are less than 1001 that are separated by delimites of newline and comma', () => {
    expect(calculateFive('\n1000\n\n3')).toEqual(1003);
  });
});

describe('Calculate Six', () => {
  it('Should add 2 numbers that are separated by 1 custom delimiter', () => {
    expect(calculateSix('//#\n2#5')).toEqual(7);
  });
  it('Should add numbers that are separated by custom delimiter, newline, and comma', () => {
    expect(calculateSix('3,2,5,32,//#\n2#5,#4#2,44!#3')).toEqual(58);
  });
  it('Should add numbers that are separated by custom delimiter, newline, and comma', () => {
    expect(
      calculateSix(',,,,,2,2,2,2//#\n2#5\n\n\n\n\n\n\n\n\n,,,5#,,#5')
    ).toEqual(25);
  });
  it('Should add numbers that are less than 1001 that are separated by delimites of newline and comma', () => {
    expect(calculateSix('\n1000\n\n3kslkdjf')).toEqual(1000);
  });
  it('Should not able to make multiple custom delimiters on separate lines or same line', () => {
    expect(calculateSix('//#\n2#5 \n //$\n5$3')).toEqual(
      new Error(
        'Cannot create multiple custom delimiters in new lines or same line'
      )
    );
  });
  it('Should not able to make multiple custom delimiters on separate lines or same line', () => {
    expect(calculateSix('//#\n2#5 \n //*\n5#3*9')).toEqual(
      new Error(
        'Cannot create multiple custom delimiters in new lines or same line'
      )
    );
  });
  it('Should convert to 0 if numbers are greater than 1000', () => {
    expect(calculateSix('1001')).toEqual(0);
  });
  it('Should convert to 0 if numbers are greater than 1000', () => {
    expect(calculateSix('12398123,12,3\n\n\n,2,,,,,,,\n\n\n\n9')).toEqual(26);
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateSix('//$\n-3$,4,5\n')).toEqual(
      new Error('Negative numbers are not allowed: -3')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateSix('-3')).toEqual(
      new Error('Negative numbers are not allowed: -3')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateSix('3,,,,,,,2,\n\n3,,,-4\n-10,')).toEqual(
      new Error('Negative numbers are not allowed: -4,-10')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateSix('-3,-2,-2,-4')).toEqual(
      new Error('Negative numbers are not allowed: -3,-2,-2,-4')
    );
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateSix('-3-2-2-4')).toEqual(0);
  });
  it('Should not accept any negative numbers', () => {
    expect(calculateSix('\n-4,5,\n\n,6,7,-8,9,10,\n\n11,12,13')).toEqual(
      new Error('Negative numbers are not allowed: -4,-8')
    );
  });
  it('Should convert non-numbers to 0', () => {
    expect(calculateSix('lkjsflksjd3\n3')).toEqual(3);
  });
  it('Should add ten numbers that are separated by delimiters of newline and comma', () => {
    expect(calculateSix('\n4,5,\n\n,6,7,8,9,10,\n\n11,12,13')).toEqual(85);
  });
  it('Should add numbers that are less than 1001 that are separated by delimites of newline and comma', () => {
    expect(calculateSix('\n1000\n\n3')).toEqual(1003);
  });
});

describe('Calculate Seven', () => {
  it('Should add 2 numbers that are separated by 1 custom delimiter', () => {
    expect(calculateSeven('//#\n2#5')).toEqual(7);
  });
  it('Should add numbers that are separated by custom delimiter with any length', () => {
    expect(calculateSeven('//[***]\n2***5')).toEqual(7);
  });
  it('Should add numbers that are separated by custom delimiter with any length, comma, and newline', () => {
    expect(calculateSeven('lkjflkj2,4,5,6,7,,,,,,//[***]\n2***5')).toEqual(29);
  });
  it('Should add numbers that are separated by custom delimiter with any length, custom delimiter with length 1, comma, and newline', () => {
    expect(
      calculateSeven(
        'lkjflkj2,4,5,6,7,,,,,,//[***]\n2***5,,,,,\n\n\n\n\n***5**,***6,****7,8***,,,,,'
      )
    ).toEqual(55);
  });
  it('Should add numbers that are separated by custom delimiter with any length, custom delimiter with length 1, comma, and newline', () => {
    expect(
      calculateSeven(
        'lkjflkj2,4,5,6,7,,,,,,//[***]\n2***5,,,,,\n\n\n\n\n***5**,***6,****7,8***,,//$\n10\n***10$50,,'
      )
    ).toEqual(125);
  });
  it('Should add numbers that are separated by custom delimiter, newline, and comma', () => {
    expect(calculateSeven('3,2,5,32,//#\n2#5,#4#2,44!#3')).toEqual(58);
  });
  it('Should add numbers that are separated by custom delimiter, newline, and comma', () => {
    expect(
      calculateSeven(',,,,,2,2,2,2//#\n2#5\n\n\n\n\n\n\n\n\n,,,5#,,#5')
    ).toEqual(25);
  });
  it('Should add 2 numbers that are separated by comma and newline', () => {
    expect(calculateSeven('2,3')).toEqual(5);
  });
  it('Should not accept any negative numbers', () => {
    expect(
      calculateSeven(
        'lkjflkj2,4,5,6,7,,,,,,//[***]\n2***5,,,,,\n\n\n\n\n***5**,***-6,****7,8***,,//$\n10\n***10$-50,,'
      )
    ).toEqual(new Error('Negative numbers are not allowed: -6'));
  });
  it('Should add numbers that are less than 1001 that are separated by delimites of newline and comma', () => {
    expect(calculateSeven('//[@@@@@@]\n@@@@@@1000\n\n3kslkdjf')).toEqual(1000);
  });
  it('Should convert to 0 if numbers are greater than 1000', () => {
    expect(calculateSeven('//[@#@#]\n,,,,,,,@#@#1003')).toEqual(0);
  });
});
