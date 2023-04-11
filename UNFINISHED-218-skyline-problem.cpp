// FIXME: Does not work

#include <iostream>
#include <vector>
#include <map>
#include <algorithm>
#include <assert.h>

using namespace std;

class Solution {
public:
    vector<vector<int>> getSkyline(vector<vector<int>>& buildings) {
        vector<vector<int>> skyline;

        if (buildings.empty())
            return skyline;

        for (int i = 0; i < buildings.size(); i++){
            bool overlapsLeft = i-1 > 0 && buildings[i-1][1] >= buildings[i][0];

            if (!overlapsLeft)
                skyline.push_back({buildings[i][0],buildings[i][2]}); // top-left corner

            bool overlapsRight = i+1 < buildings.size() && buildings[i][1] < buildings[i+1][1];

            if (!overlapsRight)
                skyline.push_back({buildings[i][1],buildings[i][2]}); // bottom-right corner
        }

        return skyline;
    }
private:
    static bool sortCorners (pair<int,int> first, pair<int,int> second) {
        return first.first < second.first;
    }
    static bool isInvalid (pair<int,int> corner) {
        return corner.first < 0;
    }
};

int main() {
    vector<vector<int>> buildings = {{2,9,10},{3,7,15},{5,12,12},{15,20,10},{19,24,8}};
    auto result = Solution().getSkyline(buildings);
    for (const auto& v : result) {
        cout << "[ ";
        for (const auto& r : v) {
            cout << r << " ";
        }
        cout << "]";
    }
    cout << endl;
    return 0;
}
