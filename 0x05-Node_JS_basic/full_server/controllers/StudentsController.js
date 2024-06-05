const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const students = await readDatabase(req.filePath);
      let response = 'This is the list of our students\n';
      let isFirstField = true;
      for (const field in students) {
        if (Object.prototype.hasOwnProperty.call(students, field)) {
          if (!isFirstField) {
            response += '\n';
          }
          isFirstField = false;
          response += `Number of students in ${field.toUpperCase()}: ${students[field].length}. List: ${students[field].join(', ')}`;
        }
      }
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return; // Remove unnecessary return statement
    }
    try {
      const students = await readDatabase(req.filePath);
      const studentsInMajor = students[major] || [];
      const studentList = studentsInMajor.join(', ');
      res.status(200).send(`List: ${studentList}`);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

module.exports = StudentsController;
