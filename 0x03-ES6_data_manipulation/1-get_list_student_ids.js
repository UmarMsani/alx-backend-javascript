/**
 * Returns an array of student IDs from an array of student objects.
 * @param {Array} arr - The input array containing student objects.
 * @returns {Array} - An array of student IDs or an empty array if the input is not an array.
 */
export default function getListStudentIds(arr) {
  // Key to access in each element of the array
  const keyToAccess = 'id';

  // Check if the input is an array
  if (Array.isArray(arr)) {
    // Map each element to its 'id' property and return the resulting array
    const valuesArray = arr.map((ele) => ele[keyToAccess]);
    return valuesArray;
  }

  // Return an empty array if the input is not an array
  return [];
}
