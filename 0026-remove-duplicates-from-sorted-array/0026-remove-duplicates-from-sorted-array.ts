function removeDuplicates(nums: number[]): number {
    let k = 0;
    let existingNums: Record<number, boolean> = {};

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        if (existingNums[current] !== undefined) continue;
        
        nums[k] = current;
        existingNums[current] = true;
        k++;
    }

    return k;
};