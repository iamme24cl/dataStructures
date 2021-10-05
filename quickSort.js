/**
QuickSort - Time Complexity
Time: best - O(n log(n)), Avg - O(n log(n)), Worse - O(n^2)
Space: Worst O(log(n))
**/

function quickSort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  const pivot = partitionHoare(array, left, right);

  if (left < pivot - 1) {
    quickSort(array, left, pivot - 1);
  } else if (right > pivot) {
    quickSort(array, pivot, right)
  }
  return array;
}

function partitionHoare(array, left, right) {
  const pivot = Math.floor(Math.random() * (right - left + 1) + left);
  while (left <= right) {
    while (array[left] < array[pivot]) {
      left++;
    }
    while (array[right] > array[pivot]) {
      right--;
    }
    if (left <= right) {
      [array[left], array[right]] = [array[right], array[left]];
    }
  }
  return left;
}
