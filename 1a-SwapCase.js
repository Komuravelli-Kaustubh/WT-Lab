const rl =require('readline-sync');

function swapCase(str) {
    let swapped = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === char.toUpperCase()) {
        swapped += char.toLowerCase();
      } else {
        swapped += char.toUpperCase();
      }
    }
    return swapped;
  }
  
  const inputString = rl.question("Enter string: ");
  const swappedString = swapCase(inputString);
  
  console.log("Original String:", inputString);
  console.log("Swapped Case String:", swappedString);
  