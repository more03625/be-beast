const replace = (array, numberToReplace, replaceWith) => {

    // Check if the numberToReplace is present in array or Not.
    let i = 0, present = false;
    while (i < array.length) {

        if (array[i] === numberToReplace) {
            //  If present do the need full
            present = true
            array[i] = replaceWith
        }
        i++
    }

    if (!present) {
        return { msg: `Number ${numberToReplace} is not present in the given array!` }
    }
    return array

}
console.log(replace([1, 5, 3, 5, 6, 8], 5, 10)); // Replace Number 5 With Number 10
// replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]