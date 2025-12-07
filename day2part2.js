let lines = txt.replace(/[\r\n]+/g, "");
lines = lines.split(",");
let invalidSum = 0;
Array.from(lines).forEach(function (elm) {
    elm = elm.split("-");
    const elm0 = Number(elm[0]);
    const elm1 = Number(elm[1]);
    let currentCheck = elm0;
    for (let i = 0; i < elm1 - elm0 + 1; i++) {
        let str = String(currentCheck);
        if (str.substring(0, 1) == "0" || /^(.+)\1{1,}$/.test(str)) {
            console.log(currentCheck);
            invalidSum += currentCheck;
        }
        currentCheck += 1;
    }
});
console.log(invalidSum);
