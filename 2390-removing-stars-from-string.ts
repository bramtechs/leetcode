function removeStars(s: string): string {
    for (let i = 0; i < s.length; i++){
        if (s[i] == "*") {
            s = s.substring(0,i-1) + s.substring(i+1);
            i-=2;
        }
    }
    return s;
};

console.log(removeStars("leet**cod*e"))
console.log(removeStars("l*et**cod*e"))
