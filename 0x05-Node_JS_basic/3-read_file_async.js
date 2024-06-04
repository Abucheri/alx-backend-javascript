const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.trim().split('\n').slice(1); // Remove header row
        const counters = {};

        rows.forEach((row) => {
          const [, , , field] = row.split(',');
          counters[field] = (counters[field] || 0) + 1;
        });

        console.log(`Number of students: ${rows.length}`);

        Object.entries(counters).forEach(([field, count]) => {
          const studentsList = rows
            .filter((row) => row.split(',')[3] === field)
            .map((row) => row.split(',')[0])
            .join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${studentsList}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
