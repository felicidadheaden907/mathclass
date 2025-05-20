function sumNumbers(nums) {
    if (nums.length === 0) return 0;
    const sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}

console.log(sumNumbers([1, 2, 3])); // Output: 6
