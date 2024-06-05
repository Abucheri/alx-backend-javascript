const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data
          .trim()
          .split('\n')
          .map((line) => line.split(','))
          .filter((student) => student.length === 4 && student[0] !== 'firstname')
          .reduce((acc, [firstName, , , field]) => {
            if (!acc[field]) acc[field] = [];
            acc[field].push(firstName);
            return acc;
          }, {});
        resolve(students);
      }
    });
  });
}

module.exports = readDatabase;
