// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

const nums1 = [1, 2, 3, 8, 9, 12];
const m = 6;
const nums2 = [2, 5, 6];
const n = 3;

const mergeArray = (nums1, m, nums2, n) => {};

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
