function merge(arr1, arr2) {
  let merged = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] >= arr2[pointer2]) {
      merged.push(arr2[pointer2]);
      pointer2++;
    } else {
      merged.push(arr1[pointer1]);
      pointer1++;
    }
  }

  if (pointer1 === arr1.length) {
    merged.push(...arr2.slice(pointer2));
  } else {
    merged.push(...arr1.slice(pointer1));
  }

  return merged;
}

function mergeSort() {
  let sortedArr = [];

  if (array.length <= 1) {
    sortedArr.push(array);
    return;
  }

  let midIdx = (array.length / 2) - 1;

  merge(array.slice(0, midIdx));
  merge(array.slice(midIdx));

  merge(arr1);
  merge(arr2);

}

module.exports = { merge, mergeSort};