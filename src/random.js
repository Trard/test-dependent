const get_random_size_array = (limit) => {
    let array = [];
    
    for ( let i; i < limit; i = i + Math.random() ) {
        array.push(1);
    };

    return array;
};

module.exports = {
    get_random_array,
};
