const test = require('test-dependence');
const { double } = require('./doubler');

console.log(double(test.get_random_size_array(1, 10)));
