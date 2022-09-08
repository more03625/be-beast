// 56) Write a Code to check whether one string is a rotation of another

// Logic :- 
// Og Str = 'rahul', 
// rotation Strs = 'ahulr', 'hulra', 'ulrah'.....
// Concat str1 with str1 & check if the str2 is present in the concatination string.
const AreRotations = (str1, str2) => {
    if ((str1.length === str2.length) && (str1 + str1).indexOf(str2) > -1) {
        return true
    }
    return false;

}
console.log(AreRotations('rahul', 'hulra'))