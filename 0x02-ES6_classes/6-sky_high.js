import Building from './5-building';
/* eslint-disable no-underscore-dangle. */
export default class SkyHighBuilding extends Building {
  /**
   * @param {number} sqft - Is a Size of the building.
   * @param {number} floors - the number of the floors.
   * Implement A getter and setter for sqft.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    } else {
      this._sqft = sqft;
    }
  }

  get floors() {
    return this._floors;
  }

  set floors(floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    } else {
      this._floors = floors;
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
