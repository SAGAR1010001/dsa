// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

const nums1 = [0, 1, 0, 3, 12];

const moveZeroes = (nums1) => {
  console.log(nums1);
  let lastNonZero = 0;
  for (let i = 0; i < nums1.length; i++) {
    console.log("status:", nums1[i]);
    if (nums1[i] !== 0) {
      const temp = nums1[lastNonZero];
      console.log("temp:", temp);
      nums1[lastNonZero] = nums1[i];
      nums1[i] = temp;
      lastNonZero++;
    }
  }
  return nums1;
};

const result = moveZeroes(nums1);
console.log("result====>", result);

const moveZeroes2 = (nums1) => {
  console.log("nums2==>", nums1);
  let newsArray = [];
  let zeroCount = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] !== 0) {
      newsArray.push(nums1[i]);
    } else {
      zeroCount++;
    }
  }

  for (let j = 0; j < zeroCount; j++) {
    newsArray.push(0);
  }
  return newsArray;
};

const result2 = moveZeroes2(nums1);
console.log("result2====>", result2);
