let lines = txt.split("\n");
console.log(lines);
let total = 0;
Array.from(lines).forEach(function (elm) {
    let largest = 0;
    for (let i = 0; i < elm.length; i++) {
        for (let j = i; j < elm.length; j++) {
            if (i != j && Number(elm.charAt(i) + elm.charAt(j)) > largest) {
                largest = Number(elm.charAt(i) + elm.charAt(j));
            }
        }
    }
    total += largest;
    console.log(largest);
});
console.log(total);
