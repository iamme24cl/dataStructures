/**
This algorithm creates a heap to sort the elements of an array.
In a heap, all nodes are stored based on the value of their parent node.

HeapSort - Time Complexity
Time: best - O(nk), Avg - O(nk), Worse - O(nk)
Space: Worst O(n + k)
**/

function makeHeap(arr) {
  const n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    maxHeapify(arr, n, i);
  }
  return arr;
}

function maxHeapify(arr, n, i) {
  let max = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[max] < arr[left]) {
    max = left;
  }

  if (right < n && arr[max] < arr[right]) {
    max = right;
  }

  if (max !== i) {
    [arr[i], arr[max]] = [arr[max], arr[i]]
    maxHeapify(arr, n, i);
  }
  return arr;
}
