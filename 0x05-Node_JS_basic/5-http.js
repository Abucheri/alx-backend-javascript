const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      // Reading the file and manually parsing it
      const data = fs.readFileSync(process.argv[2], 'utf8');
      const rows = data.trim().split('\n').slice(1); // Remove header row
      const counters = {};

      rows.forEach((row) => {
        const [, , , field] = row.split(',');
        counters[field] = (counters[field] || 0) + 1;
      });

      let response = `Number of students: ${rows.length}`;

      Object.entries(counters).forEach(([field, count]) => {
        const studentsList = rows
          .filter((row) => row.split(',')[3] === field)
          .map((row) => row.split(',')[0])
          .join(', ');
        response += `\nNumber of students in ${field}: ${count}. List: ${studentsList}`;
      });

      res.end(response);
    } catch (error) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
