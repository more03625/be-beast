const getSingleNumber = (arr) => {

    let result = 0
    for(const element of arr){
        result = result ^ element;
    }

    return result;
}

console.log('Single Number ===>', getSingleNumber([2, 2, 1]));
