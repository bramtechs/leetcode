function longestCommonPrefix(strs: string[]): string {
    let matches = false;
    let i = 0;
    while (i < 200) {
        matches = true;
        for (let str of strs) {
            if (str[i] != strs[0][i]) {
                matches = false;
            }
        }
        if (!matches) {
            break;
        }
        i++;
    }

    let prefix: string;
    if (i > 0) prefix = strs[0].substring(0, i);
    else prefix = "";
    return prefix;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["dog", "dogeball"]));
