function twoSum(nums: number[], target: number): number[] {
    let store = {};
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        let foundIndex = store[target - currentNumber];
        if (foundIndex !== undefined) return [foundIndex, i];

        store[currentNumber] = i;
    }
    return [-1, -1];
};