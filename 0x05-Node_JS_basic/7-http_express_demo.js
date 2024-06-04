const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

const port = 1245;

// Route for the root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the '/students' endpoint
app.get('/students', async (req, res) => {
  try {
    const databasePath = process.argv[2];
    if (!databasePath) {
      res.status(400).send('Database path is required');
      return;
    }

    const data = await countStudents(databasePath);
    let response = 'This is the list of our students\n';
    response += `Number of students: ${data.students.length}\n`;
    response += `Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`;
    response += `Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`;
    res.send(response);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
