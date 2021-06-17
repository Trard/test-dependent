const { get_random_size_array } = require('../src/random');

test('random test', () => {
    get_random_size_array(5).map((token) => {
        expect(token)
            .toHaveLength(3)
    });
});
