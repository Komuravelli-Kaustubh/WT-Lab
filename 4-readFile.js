const fs = require('fs');

const filePath = 'demo.txt';

// Read the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    console.log(`File content:\n${data}`);
  }
});
