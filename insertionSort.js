/**
InsertionSort - Time Complexity
Time: best - O(n), Avg - O(n^2), Worse n- O(n^2)
Space: Worst O(n)
**/


function InsertionSort(array) {
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
