/**
 * Currency class representing a form of currency.
 * @class
 */
class Currency {
  /**
   * Create a new Currency instance.
   *
   * @param {String} code - The currency code.
   * @param {String} name - The currency name.
   */
  constructor(code, name) {
    // Initialize attributes with provided values
    this.code = code;
    this.name = name;
  }

  /**
   * Set the currency code.
   *
   * @param {String} code - The new currency code.
   * @throws {TypeError} Will throw an error if the code is not a string.
   */
  set code(code) {
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = code;
  }

  /**
   * Get the currency code.
   * @returns {String} - The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the currency name.
   *
   * @param {String} name - The new currency name.
   * @throws {TypeError} Will throw an error if the name is not a string.
   */
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  /**
   * Get the currency name.
   * @returns {String} - The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Display the full currency information.
   * @returns {String} - Formatted string containing name and code.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

export default Currency;
