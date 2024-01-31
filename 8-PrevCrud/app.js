const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const dataFilePath = path.join(__dirname, 'data.json');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  // Display all students from the JSON file
  const students = loadData();
  res.render('index', { students: students });
});

app.get('/new', (req, res) => {
  // Display the form to add a new student
  res.render('new');
});

app.post('/new', (req, res) => {
  // Add a new student to the JSON file
  const students = loadData();
  const newStudent = {
    id: generateId(),
    name: req.body.name,
    age: req.body.age,
    grade: req.body.grade
  };

  students.push(newStudent);
  saveData(students);

  res.redirect('/');
});

app.get('/edit/:id', (req, res) => {
  // Display the form to edit a student
  const students = loadData();
  const student = students.find(s => s.id === req.params.id);

  if (student) {
    res.render('edit', { student: student });
  } else {
    res.redirect('/');
  }
});

app.post('/edit/:id', (req, res) => {
  // Update a student in the JSON file
  const students = loadData();
  const index = students.findIndex(s => s.id === req.params.id);

  if (index !== -1) {
    students[index] = {
      id: req.params.id,
      name: req.body.name,
      age: req.body.age,
      grade: req.body.grade
    };

    saveData(students);
  }

  res.redirect('/');
});

app.get('/delete/:id', (req, res) => {
  // Delete a student from the JSON file
  const students = loadData();
  const updatedStudents = students.filter(s => s.id !== req.params.id);
  saveData(updatedStudents);

  res.redirect('/');
});

// Helper functions
function loadData() {
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  return JSON.parse(data);
}

function saveData(data) {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(dataFilePath, jsonData, 'utf-8');
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
