/**
 * Filters an array of student objects based on their location.
 * @param {Array} students - The array of student objects.
 * @param {string} location - The location to filter students by.
 * @returns {Array} - An array of student objects with the specified location.
 */
export default function getStudentsByLocation(students, location) {
  // Use the filter method to retain only the students with the specified location
  return students.filter((student) => student.location === location);
}
