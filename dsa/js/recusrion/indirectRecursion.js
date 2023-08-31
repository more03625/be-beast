const functionA = (n) => {
    if(n > 0) {
        console.log("functionA", n)
        functionB(n-1)
    }
}

const functionB = (n) => {
    if(n>0){
        console.log("functionB", n)
        functionA(n/2)
    }
}

const main = (n) => {
    functionA(n)
}

main(5);