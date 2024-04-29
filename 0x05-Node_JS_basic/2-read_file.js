const fs = require('fs');

/**
 * Counts the number of students in each field from the database file.
 * @param {string} path - The path to the database file.
 * @param {string} dbPath - path to csv file.
 */

function countStudents(dbPath) {
  try {
    // Read the CSV file synchronously
    let students = fs.readFileSync(dbPath, 'utf-8');
    students = students.split('\n');
    students = students.slice(1, students.length - 1);
    const courses = new Map();

    // Split the data into lines and remove empty lines
    students.forEach((student) => {
      const studentData = student.split(',');
      const firstName = studentData[0];
      const field = studentData[3];
      if (courses.has(field)) {
        courses.get(field).students.push(firstName);
        courses.get(field).count += 1;
      } else {
        courses.set(field, { students: [firstName], count: 1 });
      }
    });

    // Log the number of students in each field
    console.log(`Number of students: ${students.length}`);
    courses.forEach((courseData, course) => {
      console.log(`Number of students in ${course}: ${courseData.count}. List: ${courseData.students.join(', ')}`);
    });
  } catch (error) {
    // If the file cannot be loaded, throw an error
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
