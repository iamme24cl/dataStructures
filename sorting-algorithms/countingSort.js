/**
Counting sort is a sorting algorithm that works by calculating the positions of
each element in the output sequence.

This algorithm first calculates how many times the same item occurs, and then
adds all the values. We start off with the array we want to sort and initialize
an index array. In this index array, we first store the number of times a
particular value occurs in the array we want to sort.

CountigSort - Time Complexity
Time: best - O(n + k), Avg - O(n + k), Worse n- O(n + k)
Space: Worst O(k)
**/

function countingSort(array, min, max) {
  let count = [];
  let z = 0;

  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  for (let i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
    }
  }
  return arr;
}
