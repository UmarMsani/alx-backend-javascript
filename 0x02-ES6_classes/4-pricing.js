import Currency from './3-currency';
/* eslint-disable no-underscore-dangle */

/**
 * Class representing a Pricing with an amount and currency.
 * @class
 */
export default class Pricing {
  /**
   * Create a new Pricing instance.
   *
   * @param {Number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    // Validate and set the amount attribute
    this._amount = this.validateNumber(amount, 'amount');

    // Validate and set the currency attribute
    this._currency = this.validateCurrency(currency, 'currency');
  }

  /**
   * Get the amount of the pricing.
   * @returns {Number} - The amount of the pricing.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the amount of the pricing.
   *
   * @param {Number} value - The new amount for the pricing.
   * @throws {TypeError} Will throw an error if the value is not a number.
   */
  set amount(value) {
    this._amount = this.validateNumber(value, 'amount');
  }

  /**
   * Get the currency of the pricing.
   * @returns {Currency} - The currency of the pricing.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set the currency of the pricing.
   *
   * @param {Currency} value - The new currency for the pricing.
   * @throws {TypeError} Will throw an error if the value is not a valid Currency instance.
   */
  set currency(value) {
    this._currency = this.validateCurrency(value, 'currency');
  }

  /**
   * Display the full pricing information.
   * @returns {String} - Formatted string containing amount and currency information.
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Validate that the value is a number.
   *
   * @param {any} value - The value to validate.
   * @param {String} attribute - The name of the attribute.
   * @returns {Number} - The validated number.
   * @throws {TypeError} Will throw an error if the value is not a number.
   */
  validateNumber(value, attribute) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`${attribute} must be a valid number`);
    }
    return value;
  }

  /**
   * Validate that the value is a valid Currency instance.
   *
   * @param {any} value - The value to validate.
   * @param {String} attribute - The name of the attribute.
   * @returns {Currency} - The validated Currency instance.
   * @throws {TypeError} Will throw an error if the value is not a valid Currency instance.
   */
  validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency`);
    }
    return value;
  }

  /**
   * Static method to convert a price using a conversion rate.
   *
   * @param {Number} amount - The amount to convert.
   * @param {Number} conversionRate - The conversion rate.
   * @returns {Number} - The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
