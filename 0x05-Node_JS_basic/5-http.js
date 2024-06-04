const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const databasePath = process.argv[2];
    countStudents(databasePath)
      .then(() => {
        fs.readFile(databasePath, 'utf8', (error, data) => {
          if (error) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          } else {
            const rows = data.trim().split('\n').slice(1); // Remove header row
            const counters = {};

            for (let i = 0; i < rows.length; i += 1) {
              const [, , , field] = rows[i].split(',');
              if (field in counters) {
                counters[field] += 1;
              } else {
                counters[field] = 1;
              }
            }

            let response = `This is the list of our students\nNumber of students: ${rows.length}`;

            Object.entries(counters).forEach(([field, count]) => {
              const studentsList = rows
                .filter((row) => row.split(',')[3] === field)
                .map((row) => row.split(',')[0])
                .join(', ');
              response += `\nNumber of students in ${field}: ${count}. List: ${studentsList}`;
            });

            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(response);
          }
        });
      })
      .catch(() => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
