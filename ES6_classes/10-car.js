export default class Car {
  /**
   * @param {String} brand
   * @param {String} motor
   * @param {String} color
   */
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /**
   * Klasın hansı tipdə (species) klonlanacağını təyin edir.
   */
  static get [Symbol.species]() {
    return this;
  }

  /**
   * Cari klasın yeni bir nüsxəsini (klonunu) yaradır.
   * Atributlar undefined olaraq qalmalıdır (test nümunəsinə əsasən).
   * @returns {Object}
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species();
  }
}
