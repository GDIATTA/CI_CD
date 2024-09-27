// sum.test.js
const sum = require('./sum');  // Importing the module to test

test('add should return 3 when input are 2 and 1', () => {
    expect(sum.add(2,1)).toBe(3);
});
