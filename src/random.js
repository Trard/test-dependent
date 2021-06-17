const get_random_array = () => {
    let array = [];
    
    for (let i; i<5; i = i + Math.random()) {
        array.push(1);
    };

    return array;
};

module.exports = {
    get_random_array,
};
