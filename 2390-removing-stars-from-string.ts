function removeStars(s: string): string {
    const stack: Array<string> = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*") {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    let result = "";
    for (let c of stack) {
        result += c;
    }
    return result;
}

console.log(removeStars("leet**cod*e"));
console.log(removeStars("l*et**cod*e"));
