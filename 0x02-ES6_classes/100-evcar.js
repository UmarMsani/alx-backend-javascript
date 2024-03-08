/* eslint-disable no-underscore-dangle */
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  /**
   * Clone the car, returning an instance of Car.
   * @returns {Car} - A new instance of Car.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species] || Car;
    return new Species();
  }
}
