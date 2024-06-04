const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split data into rows
    const rows = data.trim().split('\n');

    // Remove header row
    const [, ...students] = rows;

    // Initialize counters for each field
    const counters = {};

    // Count students in each field
    students.forEach((student) => {
      const [, , , field] = student.split(',');
      counters[field] = (counters[field] || 0) + 1;
    });

    // Display total number of students
    console.log(`Number of students: ${students.length}`);

    // Display number of students in each field
    for (const [field, count] of Object.entries(counters)) {
      const studentsList = students
        .filter((student) => student.split(',')[3] === field)
        .map((student) => student.split(',')[0])
        .join(', ');
      console.log(`Number of students in ${field}: ${count}. List: ${studentsList}`);
    }
  } catch (error) {
    // Handle file read error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
