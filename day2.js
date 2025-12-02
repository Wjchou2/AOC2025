let txt = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`;
let lines = txt.replace(/[\r\n]+/g, "");
lines = lines.split(",");
let invalidSum = 0;
Array.from(lines).forEach(function (elm) {
    elm = elm.split("-");
    const elm0 = Number(elm[0]);
    const elm1 = Number(elm[1]);
    // console.log(elm0, elm1);
    let currentCheck = elm0;
    for (let i = 0; i < elm1 - elm0 + 1; i++) {
        let str = String(currentCheck);
        if (
            str.substring(0, 1) == "0" ||
            str.substring(0, str.length / 2) == str.substring(str.length / 2)
        ) {
            console.log(currentCheck);
            invalidSum += currentCheck;
        }
        currentCheck += 1;
    }
});
console.log(invalidSum);
