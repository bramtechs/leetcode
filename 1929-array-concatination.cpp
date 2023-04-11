#include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    vector<int> getConcatenation(vector<int>& nums) {
        vector<int> result = nums;
        auto it = result.begin();
        result.insert(it, nums.begin(), nums.end());
        return result;
    }
};

int main() {
    vector<int> input = { 1, 2, 1 };
    vector<int> output = Solution().getConcatenation(input);
    for (const int o : output) {
        cout << o << " ";
    }
    cout << endl;
    return 0;
}
