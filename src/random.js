const get_random_size_array = (limit) => {
    let array = [];
    
    for ( let i = 0; i < limit; i = i + Math.random() ) {
        array.push("123");
    };

    return array;
};

module.exports = {
    get_random_size_array,
};
