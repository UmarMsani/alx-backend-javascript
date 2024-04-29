import { readFile } from 'fs';

/**
 * Reads the data of students in a CSV data file.
 * @param {String} dbPath The path to the CSV data file.
 * @returns {Promise<{
 *   String: {firstname: String, lastname: String, age: number}[]
 * }>}
 */

export default function readDatabase(db) {
  return new Promise((resolve, reject) => {
    readFile(db, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const courseInfo = {};
        let students = data.split('\n');
        students = students.slice(1, students.length - 1);
        students.forEach((student) => {
          const studentData = student.split(',');
          const field = studentData[3];
          const firstName = studentData[0];
          if (field in courseInfo) courseInfo[field].push(firstName);
          else courseInfo[field] = [firstName];
        });
        resolve(courseInfo);
      }
    });
  });
}
