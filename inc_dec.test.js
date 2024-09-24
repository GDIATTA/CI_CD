// inc_dec.test.js
const inc_dec = require('./inc_dec');  // Importing the module to test

test('increment should return 4 when input is 3', () => {
    expect(inc_dec.increment(3)).toBe(4);
});

// This test is designed to fail for demonstration purposes
test('decrement should return 2 when input is 3', () => {
    expect(inc_dec.decrement(3)).toBe(2);  // This will fail since 3 - 1 = 2, not 3
});
