const fs = require("fs");
const txt = fs.readFileSync("input.txt", "utf8");
let lines = txt.split("\n");
let splitIndex = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i] == "") {
        splitIndex = i;
        break;
    }
}
let index = 0;
let ranges = [];
let fresh = 0;
let count = 0;
for (let j = splitIndex; j < lines.length; j++) {
    let number = Number(lines[j]);
    for (let i = 0; i < lines.length; i++) {
        if (index < splitIndex) {
            let range = lines[i].split("-");
            ranges.push(Number(i));
            if (number >= range[0] && number <= range[1]) {
                count++;
                break;
            }
        } else {
            break;
        }
    }
}
console.log(count);
