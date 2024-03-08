/* eslint-disable no-underscore-dangle */
export default class Car {
  /**
   * Create a new Car instance.
   *
   * @param {String} brand - The brand of the car.
   * @param {String} motor - The motor type of the car.
   * @param {String} color - The color of the car.
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Clone the car, returning a new instance of the class.
   * @returns {Car} - A new instance of Car.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species] || Car;
    return new Species();
  }
}
