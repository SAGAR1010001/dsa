// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 6;
const nums2 = [2, 5, 6];
const n = 3;

const mergeArray = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  console.log("i====>", i, "j====>", j, "k=====>", k);
  console.log("nums1==>", nums1, "nums2==>", nums2);
  while (j >= 0) {
    // nums1[5] > nums2[2]  ==> false so nums1[8]= nums2[2]
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[k] = nums1[1];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
};

const output2 = mergeArray(nums1, m, nums2, n);
console.log("output2====>", output2);

/****
 *
 *
 *
 * 1. first keep looping untill m and n either one is grater than 0
 * 2. check if num1 or nums 2 for their last number and comapring them which one is greater
 * 3. place that for nums[total]= nums1[m1] or nums2[n1]
 * 4. m1-- or n1--
 * 5. total--
 * 6.  if any value left from nums2 populate nums1
 *
 *
 *
 */
