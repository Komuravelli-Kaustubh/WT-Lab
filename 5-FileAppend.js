const fs = require('fs');
const rl = require('readline-sync');

const text = rl.question('Enter text: ');
const fileName = rl.question('Enter File Name: ');

if (fs.existsSync(fileName)) {
    fs.appendFile(fileName, text, (err) => {
        if (err) {
            console.error('Error appending to file:', err);
        } else {
            console.log('Appended to existing file');
        }
    });
} else {
    fs.writeFile(fileName, text, (err) => {
        if (err) {
            console.error('Error creating new file:', err);
        } else {
            console.log('New file created');
        }
    });
}
