
const lines = txt.split("\n");
let countZero = 0;
let currentNum = 50;
Array.from(lines).forEach(function (elm) {
    const num = Number(elm.substring(1)) % 100;
    currentNum += elm.charAt(0) == "L" ? -num : num;
    if (currentNum < 0) {
        currentNum = 100 - Math.abs(currentNum);
    } else if (currentNum > 99) {
        currentNum = currentNum % 100;
    }
    if (currentNum == 0) {
        countZero++;
    }
});
console.log(countZero);
