const { double } = require('../src/doubler');

test('size of doubled size array', () => {
    let test_array = [1, 2, 3];

    //size array
    expect(double(test_array)).toHaveLength(test_array.length * 2);
});
