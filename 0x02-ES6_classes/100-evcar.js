/* eslint-disable no-underscore-dangle */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
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
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
