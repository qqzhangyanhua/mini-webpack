var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        return [map.get(nums[i]), i];
      } else {
        map.set(target - nums[i], i);
      }
    }
  };
const nums = [2,5,11,15,7]

for(let i=0;i<30;i++){
    console.log(i)
}
  console.log(twoSum(nums,9));