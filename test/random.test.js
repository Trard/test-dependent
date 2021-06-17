const { get_random_size_array } = require('../src/random');

test('random test', () => {
    console.log(get_random_size_array());
    expect(get_random_size_array());
});
