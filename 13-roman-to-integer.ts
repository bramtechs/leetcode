function getValueOfSymbol(c: string): number {
    switch (c) { // NOTE: My C brain kicked in, should have used a dictionary lol
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
        default:
            console.error(`Unknown symbol ${c} (len ${c.length})`);
            return 0;
    }
}

function romanToInt(s: string): number {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let val = getValueOfSymbol(s.charAt(i));
        if (i < s.length - 1) {
            let valNext = getValueOfSymbol(s.charAt(i + 1));
            if (valNext > val) {
                result += valNext - val;
                i++;
            } else {
                result += val;
            }
        } else {
            result += val;
        }
    }
    return result;
}

// TODO: Unit test
console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("V"));
console.log(romanToInt("IX"));
console.log(romanToInt("X"));
console.log(romanToInt("DXXVII"));
console.log(romanToInt("XXVII"));
