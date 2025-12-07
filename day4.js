

let positions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
];
let lines = txt.split("\n");
let final = 0;
let total = 0;
for (let i = 0; i < lines.length; i++) {
    let elm = lines[i];
    for (let j = 0; j < elm.length; j++) {
        let count = 0;
        char = lines[i].charAt(j);
        Array.from(positions).forEach(function ([x, y]) {
            if (
                i + y >= 0 &&
                j + x >= 0 &&
                lines.length > i + y &&
                lines[i + y].length > j + x &&
                lines[i + y].charAt(j + x) == "@"
            ) {
                count++;
            }
        });
        if (count < 4 && char == "@") {
            console.log(char, i, j);
            final++;
        }
        count = 0;
    }
}
console.log(final);
