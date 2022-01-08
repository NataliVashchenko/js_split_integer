'use strict';

const splitInteger = require('./splitInteger');

test(`should split a number into equal parts if a value is divisible by a numberOfParts`, () => {
  expect(splitInteger(18, 2)).toEqual([9, 9]);
});

test(`should return a part equals to a value when splitting into 1 part`, () => {
  expect(splitInteger(18, 2)).toEqual([9, 9]);
});

test('should sort parts ascending if they are not equal', () => {
  expect(splitInteger(20, 5)).toEqual([4, 4, 4, 4, 4]);
});

test('should add zeros if value < numberOfParts', () => {
  expect(splitInteger(0, 2)).toEqual([0, 0]);
});
