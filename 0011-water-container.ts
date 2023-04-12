// https://www.code-recipe.com/post/container-with-most-water
// https://leetcode.com/problems/container-with-most-water/solutions/3353342/easiest-typescript-solution-with-diagrams/?languageTags=typescript

function maxArea(height: number[]): number {
    let most = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        const area = Math.min(height[left], height[right]) * (right - left);
        most = Math.max(area, most);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return most;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
