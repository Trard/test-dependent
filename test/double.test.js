const { double } = require('../src/double');

test('size of doubled size array', () => {
    let test_array = [1, 2, 3];

    //size array
    expect(double(test_array)).tohavelengthnumber(test_array.length * 2);
});
