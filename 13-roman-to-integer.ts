const _symbolValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

function romanToInt(s: string): number {
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let val = _symbolValues[s.charAt(i)];
        if (i < s.length - 1) {
            let valNext = _symbolValues[s.charAt(i + 1)];
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

function testRomanToInt() {
    console.assert(romanToInt("III") === 3);
    console.assert(romanToInt("IV") === 4);
    console.assert(romanToInt("V") === 5);
    console.assert(romanToInt("IX") === 9);
    console.assert(romanToInt("X") === 10);
    console.assert(romanToInt("DXXVII") === 527);
    console.assert(romanToInt("XXVII") === 27);
}

testRomanToInt();
