/**
 * Class representing a Holberton Course.
 * @class
 */
export default class HolbertonCourse {
  /**
   * Create a new HolbertonCourse instance.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - Duration of the course in months.
   * @param {String[]} students - An array of student names in the course.
   */
  constructor(name, length, students) {
    // Initialize attributes with provided values
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Get the name of the course.
   * @returns {String} - The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the course.
   *
   * @param {String} value - The new name for the course.
   * @throws {TypeError} Will throw an error if the value is not a string.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Get the duration of the course in months.
   * @returns {Number} - The duration of the course in months.
   */
  get length() {
    return this._length;
  }

  /**
   * Set the duration of the course in months.
   *
   * @param {Number} value - The new duration for the course.
   * @throws {TypeError} Will throw an error if the value is not a number.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Get the array of student names in the course.
   * @returns {String[]} - An array of student names in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Set the array of student names in the course.
   *
   * @param {String[]} value - The new array of student names.
   * @throws {TypeError} Will throw an error if the value is not an array of strings.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
