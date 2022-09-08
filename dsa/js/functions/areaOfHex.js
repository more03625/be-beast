const getHexArea = (lengthOfHexagon) => {
    let ans = ((3 * Math.sqrt(3)) / 2) * (lengthOfHexagon * lengthOfHexagon)
    return ans.toFixed(2)

}

console.log(getHexArea(10));