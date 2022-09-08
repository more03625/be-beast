// 3)Find Duplicate characters in a string
const countDuplicateInString = str => {
    // Create New Array & fill count with 0

    var count = {};
    for (var i = 0; i < str.length; i++) {
        count[str[i]] = 0; // Make all the count to 0
    }

    for (var i = 0; i < str.length; i++) {
        // str[i] :- Gives all the letters one by one!
        count[str[i]]++; // Increase the counter of above letter by 1
    }
    let a = []
    for(let letter in count){ // Loop On Above's Count & If count is greate than 1 log that letter with it's count
        if(count[letter] > 1){
            a.push({letter, count : count[letter]})
        }
    }
    return a;

    // O(n) , O(n), O(n) = 3 O(n)
}
console.log("Duplicates are ===> ", countDuplicateInString("rraahull"));