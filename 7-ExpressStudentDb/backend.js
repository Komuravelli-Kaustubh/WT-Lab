const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

const students = {
  '123': { rollNumber: '123', name: 'bin laden', age: 20, grade: 'A' },
  '456': { rollNumber: '456', name: 'trump', age: 21, grade: 'B' },
  '111': { rollNumber: '111', name: 'sonu', age:20, grade:'A' },
  '134': { rollNumber: '134', name: 'Jack', age:22, grade:'A'},
  '145': { rollNumber: '145', name: 'sai', age:21, grade:'B'}
};

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/frontendform.html');
});

app.post('/getStudentDetails', (req, res) => {
  const rollNumber = req.body.rollNumber;

  if (!rollNumber || !students[rollNumber]) {
    return res.status(404).json({ error: 'Student not found' });
  }

  const studentDetails = students[rollNumber];
  res.json(studentDetails);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
