function getConcatenation(nums: number[]): number[] {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        nums.push(nums[i])
    }
    return nums;
};