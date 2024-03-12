/**
 * Updates the grades of students in a specific city based on new grade information.
 * @param {Array} students - The array of student objects.
 * @param {string} city - The city to filter students by.
 * @param {Array} newGrades - An array of objects containing studentId and grade information.
 * @returns {Array} - An array of updated student objects.
 */
export default function updateStudentGradeByCity(
  students,
  city,
  newGrades,
) {
  const filterStudents = students.filter(
    (student) => student.location === city,
  );

  const gradeStudents = filterStudents.map(
    (student) => {
      for (const gradeInfo of newGrades) {
        if (student.id === gradeInfo.studentId) {
          student.grade = gradeInfo.grade;
        }
      }
      if (student.grade === undefined) {
        student.grade = 'N/A';
      }
      return student;
    },
  );

  return gradeStudents;
}
