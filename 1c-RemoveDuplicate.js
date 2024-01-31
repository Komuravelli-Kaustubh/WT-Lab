function removeDuplicates(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

const myArray = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5];
const uniqueArray = removeDuplicates(myArray);
console.log(uniqueArray);
