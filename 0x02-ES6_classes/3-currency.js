/* eslint-disable no-underscore-dangle */

/**
 * Class representing a Currency.
 * @class
 */
export default class Currency {
  /**
   * Create a new Currency instance.
   *
   * @param {String} code - The currency code.
   * @param {String} name - The currency name.
   */
  constructor(code, name) {
    // Initialize attributes with provided values
    this._code = this.validateString(code, 'code');
    this._name = this.validateString(name, 'name');
  }

  /**
   * Get the currency code.
   * @returns {String} - The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the currency code.
   *
   * @param {String} value - The new currency code.
   * @throws {TypeError} Will throw an error if the value is not a string.
   */
  set code(value) {
    this._code = this.validateString(value, 'code');
  }

  /**
   * Get the currency name.
   * @returns {String} - The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the currency name.
   *
   * @param {String} value - The new currency name.
   * @throws {TypeError} Will throw an error if the value is not a string.
   */
  set name(value) {
    this._name = this.validateString(value, 'name');
  }

  /**
   * Display the full currency information.
   * @returns {String} - Formatted string containing name and code.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  /**
   * Validate that the value is a string.
   *
   * @param {any} value - The value to validate.
   * @param {String} attribute - The name of the attribute.
   * @returns {String} - The validated string.
   * @throws {TypeError} Will throw an error if the value is not a string.
   */
  validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }
}
