const fs = require("fs");
const txt = fs.readFileSync("input2.txt", "utf8");

let lines = txt
    .split("\n")
    .map((line) => line.split(" ").filter((elm) => elm !== ""))
    .filter((row) => row.length > 0); // <- important if file ends with a blank line

let count = 0;
for (let i = 0; i < lines[0].length; i++) {
    if (lines[4][i] == "+") {
        count +=
            Number(lines[0][i]) +
            Number(lines[1][i]) +
            Number(lines[2][i]) +
            Number(lines[3][i]);
    } else if (lines[4][i] == "*") {
        count +=
            Number(lines[0][i]) *
            Number(lines[1][i]) *
            Number(lines[2][i]) *
            Number(lines[3][i]);
    } else {
        console.log("error");
    }
}
console.log(count);
