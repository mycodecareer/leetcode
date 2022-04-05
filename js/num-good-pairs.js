/*
https://leetcode.com/problems/number-of-good-pairs/


R.I.P.S.S.

Repeat:
  return the number of (count) pairs, where the numbers are the same

Inputs:
  Length of the array is 1 <= len <= 100
  all integers
  0 indexed
  i < j
  each integer value is 1 <= nums[i] <= 100

Pseudo Code:
  going to need a for loop
  going to need a total count variable
  increase the total count variable each time a pair is found
  want to iterate over the array comparing each index to each subsequent index
  

Simple:

Solve: 

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  // initialize variables
  let numPairs = 0;
  const pairs = new Map();

  // Build map of occurances
  for (let i = 0; i < nums.length; i++) {
    if (pairs.has(nums[i])) {
      pairs.set(nums[i], pairs.get(nums[i]) + 1);
    } else {
      pairs.set(nums[i], 0);
    }
  }
  /*
	[1,2,3]
	compare 1 and 2
	compare 1 and 3
	compare 2 and 3
	
	    (2) 1,1,1 = 3
	    (3) 1,1,1,1 = 6
	    (4) 1,1,1,1,1 = 10 
	    (5) 1,1,1,1,1,1 = 15
	    
*/

  // Iterate over the map and sum up the number of pairs
  for (let value of pairs.values()) {
    while (value > 0) {
      numPairs += value;
      value--;
    }
  }

  // O(n + k*m)
  return numPairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
console.log(numIdenticalPairs([1, 2, 3]));
console.log(numIdenticalPairs([1, 1, 1, 1]));
