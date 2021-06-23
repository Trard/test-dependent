const { get_random_size_array } = require('../lib/random_size_array');

expect.extend({
    toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false,
            };
        }
    },
});

test('size of random size array', () => {
    let random_size_array = get_random_size_array(1, 10);

    //size array
    expect(random_size_array.length).toBeWithinRange(1, 10);
});

test('size items of random size array', () => {
    let random_size_array = get_random_size_array(1, 10);

    //size items of array
    random_size_array.map((token) => {
        expect(token).toHaveLength(3);
    });
});
