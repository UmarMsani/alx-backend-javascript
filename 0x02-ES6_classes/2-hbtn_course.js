export default class HolbertonCourse {
  constructor(name, length, students) {
    // Validate and set the name attribute
    this._name = this.validateString(name, 'name');

    // Validate and set the length attribute
    this._length = this.validateNumber(length, 'length');

    // Validate and set the students attribute
    this._students = this.validateStudents(students);

    // Define getters and setters
    Object.defineProperties(this, {
      name: {
        get: () => this._name,
        set: (value) => (this._name = this.validateString(value, 'name')),
      },
      length: {
        get: () => this._length,
        set: (value) => (this._length = this.validateNumber(value, 'length')),
      },
      students: {
        get: () => this._students,
        set: (value) => (this._students = this.validateStudents(value)),
      },
    });
  }

  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new Error(`${attribute} must be a string`);
    }
    return value;
  }

  validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new Error(`${attribute} must be a number`);
    }
    return value;
  }

  validateStudents(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new Error('students must be an array of strings');
    }
    return value;
  }
}
