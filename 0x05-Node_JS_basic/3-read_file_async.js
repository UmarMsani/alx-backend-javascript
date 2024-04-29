const fs = require('fs');

/**
 * Counts the number of students in each field from the database file asynchronously.
 * @param {string} dbpath - The path to the database file.
 * @returns {Promise} A promise that resolves with the student count data.
 */

function countStudents(dbPath) {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf-8', (error, data) => {
      if (error) {
        reject(Error('Cannot load the database'));
      } else {
        const courses = new Map();
        let students = data.split('\n');
        students = students.slice(1, students.length - 1);

        // Loop through each line (student) in the CSV file
        students.forEach((student) => {
          const studentData = student.split(',');
          const firstName = studentData[0];
          const field = studentData[3];
          if (courses.has(field)) courses.get(field).push(firstName);
          else courses.set(field, [firstName]);
        });

        // Log the number of students in each field
        console.log(`Number of students: ${students.length}`);
        courses.forEach((courseStudents, course) => {
          console.log(`Number of students in ${course}: ${courseStudents.length}. List: ${courseStudents.join(', ')}`);
        });
        resolve();
      }
    });
  });
}

module.exports = countStudents;
