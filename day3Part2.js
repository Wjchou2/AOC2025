let lines = txt.split("\n");
// console.log(lines);
let total = 0;
Array.from(lines).forEach(function (elm) {
    let combined = "";
    let lastIndex = -1;
    let largestFirstNum = 0;
    for (let j = 12; j > 0; j--) {
        largestFirstNum = 0;
        for (let i = lastIndex + 1; i < elm.length - j + 1; i++) {
            if (elm.charAt(i) > largestFirstNum) {
                lastIndex = i;
                largestFirstNum = elm.charAt(i);
            }
        }
        combined += String(largestFirstNum);
    }
    total += Number(combined);
});

console.log(total);
