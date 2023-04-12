function reverse(x: number): number {
    let isPositive = true;
    if (x < 0) {
        x = Math.abs(x);
        isPositive = false;
    }

    let y = 0;
    while (x > 0) {
        y *= 10;
        y += x % 10;
        x = Math.floor(x / 10);
    }
    if (y > Math.pow(2, 31)) {
        return 0;
    }
    return isPositive ? y : -y;
}

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1534236469));
