/**
A significant number is one that does not have a zero at the beginning.

20: two significant numbers, 2 and 0. The least significant number is 0, the
most significant number is 2.

02: one significant number: 2. The least significant number is 2.

12.005: five significant numbers: 2, 2, 0, 0, and 5. The least significant
number is 5, the most significant number is 1.

Radix sort is used to sort numbers, and works by sorting the least significant
number to the most significant number.

RadixSort - Time Complexity
Time: best - O(nk), Avg - O(nk), Worse - O(nk)
Space: Worst O(n + k)
**/

function radixSort(array) {
  const max = Math.max(...array).toString().length;
  let digitBuckets = [];
  let index = 0;

  for (let i = 0; i < max + 1; i++) {
    digitBuckets = [];
    for (let j = 0; j < list.length; j++) {
      const digit = getDigit(array[j], i + 1);
      digitBuckets[digit] = digitBuckets[digit] || [];
      digitBuckets[digit].push(array[j]);
    }

    let idx = 0;
    for (let t = 0; t < digitBuckets.length; t++) {
      if (digitBuckets[t] && digitBuckets[t].length > 0) {
        for (let m = 0; m < digitBuckets[t].length; m++) {
          array[idx++] = digitBuckets[t][m];
        }
      }
    }
  }
  return array;
}

function getDigit(num, nth) {
  let value = 0;
  while (nth--) {
    value = num % 10;
    num = Math.floor((num - value) / 10);
  }
  return value;
}
