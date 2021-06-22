'use strict';

const getRandomIntInclusive = (min, max) => {
    let min_ceil = Math.ceil(min);
    let max_floor = Math.floor(max);
    return Math.floor(Math.random() * (max_floor - min_ceil + 1)) + min_ceil;
};

const get_random_size_array = (min, max) => {
    let array = [];

    for (let i = 0; i < getRandomIntInclusive(min, max); i++) {
        array.push('143');
    }

    return array;
};

module.exports = {
    get_random_size_array,
};
