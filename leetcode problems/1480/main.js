let nums = [1, 2, 3, 4];

const runningSum = function (nums) {
  let i = 0;
  let sum = [];
  nums.forEach((num) => {
    i = num + i;
    sum.push(i);
  });
  return sum;
};

console.log(runningSum(nums));
