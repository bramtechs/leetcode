#include <iostream>
#include <math.h>

using namespace std;

class Solution {
public:
    int reverse(int x) {
        bool isPos = true;
        if (x < 0) {
            x = abs(x);
            isPos = false;
        }

        int y = 0;
        while (x > 0) {
            if (y <= INT32_MAX / 10) {
                y *= 10;
            } else {
                return 0;
            }
            y += x % 10;
            x /= 10;
        }
        return isPos ? y:-y;
    }
};


int main() {
    auto s = Solution();
    cout << s.reverse(-123) << endl;
    cout << s.reverse(123) << endl;
    cout << s.reverse(120) << endl;
    cout << s.reverse(1534236469) << endl;
}
