function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  const myArray = [7, 2, 1, 6, 8, 5, 3, 4];
  const sortedArray = quickSort(myArray);
  
  console.log("Original Array:", myArray);
  console.log("Sorted Array:", sortedArray);
  