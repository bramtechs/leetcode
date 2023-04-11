#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize){

    for (int i = 0; i < numsSize; i++) {
        for (int j = 0; j < numsSize; j++) {
            if (i == j) continue;
            if (nums[i] + nums[j] == target) {
                int* result = calloc(2,sizeof(int));
                result[0] = i;
                result[1] = j;
                *returnSize = 2;
                return result;
            }
        }
    }
    *returnSize = 0;
    return NULL;
}

#include <stdio.h>
int main()
{
    int nums[] = {2,7,11,15};
    int size;
    int* results = twoSum(nums, 4, 9, &size);
    for (int i = 0; i < size; i++) {
        printf("%d ", results[i]);
    }
    printf("\n");
    return 0;
}
