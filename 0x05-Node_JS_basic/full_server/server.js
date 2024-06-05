const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = 1245;

app.use(express.json());

// Set the file path from command line argument
app.use((req, res, next) => {
  req.filePath = path.resolve(process.argv[2]);
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export default app;
