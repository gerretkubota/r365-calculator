const { calculateOne, calculateTwo } = require('../utils/util.js');

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
  it('Should implicitly convert emptry space or missing numbers to 0', () => {
    expect(calculateTwo('')).toEqual(0);
  });
  it('Should only return the original number if the string does not contain any delimiter', () => {
    expect(calculateTwo('2')).toEqual(2);
  });
});
