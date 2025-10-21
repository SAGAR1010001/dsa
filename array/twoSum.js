// let nums = [2, 7, 11, 15];
const nums = [2, 7, 4, 5, 3, 6, 2, 7];
let target = 9;

// const twoSum = (nums, target) => {
//   console.log("nums======>", nums);

//   for (let i = 0; i < nums.length; i++) {
//     let firstNum = nums[i];
//     console.log("firstNum", firstNum);
//     for (let j = i + 1; j < nums.length; j++) {
//       console.log("hi");
//       if (nums[j] == target - firstNum) {
//         return [firstNum, target - firstNum];
//       }
//     }
//   }
// };

// let result = twoSum(nums, target);
// console.log("result=====>", result);

const twoSumOptimised = (nums, target) => {
  let map = new Map();
  //   map.set("name", "Sagar");
  console.log(map);
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    console.log("mapping of value", map);
    console.log("nums====>", nums[i]);
    complement = target - nums[i];

    // map = {
    //     2: "0",
    //     7: "1"
    //  }
    if (map.has(complement)) {
      console.log("complement============>", complement);
      console.log("hi");
      result.push([complement, nums[i]]);
      //   return [complement, nums[i]];
      //   return [map.get(complement), i];
    }
    map.set(nums[i], i);
    console.log("--------------------->");
  }
  return result;
};

let result2 = twoSumOptimised(nums, target);
console.log("result2====>", result2);

/*****
 *
 *
 * 1. create a function with argument nums array and target
 *
 * 2. create Map variable , result array variable
 *
 * 3. loop over array of nums
 *
 * 4. have a complement = target - nums[i]
 *
 * 5. check if there is complement available  inside map variable then add those combinations
 *
 *
 *
 *
 *
 *
 */
