/**
This algorithm starts with the first element in the array until the last
element in the array, and keeps on doing so until there in one complete
pass without swapping.

BubbleSort - Time Complexity
Time: best - O(n), Avg - O(n^2), Worse n- O(n^2)
Space: Worst O(1)
**/

function bubbleSort(array) {
  // First we need to check if we need to swap at all
  // If an entire pass has gone without swapping, we return the array
  let swapped;
  do {
    swapped = false;

    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return array;
}
