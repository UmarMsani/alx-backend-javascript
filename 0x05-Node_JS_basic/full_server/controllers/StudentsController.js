import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
export default class StudentsController {
  /**
   * Retrieves student data from the database and sets it on the response object.
   * @param {*} request   - The request object.
   * @param {*} response  - The response object.
   */
  static getAllStudents(request, response) {
    const body = ['This is the list of our students'];
    readDatabase(process.argv[2] === undefined ? '' : process.argv[2])
      .then((courseInfo) => {
        for (const course in courseInfo) {
          if (Array.isArray(courseInfo[course])) {
            const students = courseInfo[course];
            body.push(`Number of students in ${course}: ${students.length}. List: ${students.join(', ')}`);
          }
        }
        response.statusCode = 200;
        response.send(body.join('\n'));
      })
      .catch((error) => {
        response.statusCode = 500;
        response.send(error.message);
      });
  }

  /**
   * Searches for students by major defined in request parameters
   * and sets them on the response object
   * @param {*} request  - The request object
   * @param {*} response - The response object.
   */
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.statusCode = 500;
      response.send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2] === undefined ? '' : process.argv[2])
        .then((courseInfo) => {
          response.statusCode = 200;
          response.send(`List: ${courseInfo[major].join(', ')}`);
        })
        .catch((error) => {
          response.statusCode = 500;
          response.send(error.message);
        });
    }
  }
}
