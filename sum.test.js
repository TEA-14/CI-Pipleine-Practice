const { add } = require('./sum');

test('adds 2 + 3 equals 5', () => {
    expect(add(2,3)).toBe(5);
});