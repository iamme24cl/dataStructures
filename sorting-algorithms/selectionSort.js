/**
Selection sort works by finding the minimum, and then comparing each element
to that minimum to decide its correct position.

SelectionSort - Time Complexity
Time: best - O(n^2), Avg - O(n^2), Worse - O(n^2)
Space: Worst O(1)
**/

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (i !== min) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
}
