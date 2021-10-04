

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
