let nums = [1, 7, 3, 6, 5, 6];

const pivotIndex = function (nums) {
  let total = nums.reduce((a, b) => {
    return a + b;
  });
  preSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - nums[i] - preSum;
    if (rightSum == preSum) {
      return i;
    }
    preSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex(nums));
