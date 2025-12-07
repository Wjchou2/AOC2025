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
let lowers = [];
let highers = [];
for (let i = 0; i < lines.length; i++) {
    if (i < splitIndex) {
        let range = lines[i].split("-");
        lowers.push(Number(range[0]));
        highers.push(Number(range[1]));
    } else {
        break;
    }
}
for (let i = 0; i < lines.length; i++) {
    if (i < splitIndex) {
        let range = lines[i].split("-");
        let lowestClose=0
         let highestClose=0
        for (let i = 0; i < lines.length; i++) {
            if (lowers[i]>range[0] && Math.abs(lowers[i]-range[0])<lowestClose ){
                lowestClose=Math.abs(lowers[i]-range[0])
            }
              if (highers[i]<range[1] &&){
                lowestClose=Math.abs(lowers[i]-range[0])
            }
        }
        lowers.push(Number());
        highers.push(Number(range[1]));

    } else {
        break;
    }
}
