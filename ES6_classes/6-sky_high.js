import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  /**
   * @param {Number} sqft - Binanın sahəsi (valideyn klasa ötürülür)
   * @param {Number} floors - Mərtəbə sayı
   */
  constructor(sqft, floors) {
    // Valideyn klasın (Building) constructor-unu çağırırıq
    super(sqft);
    this._floors = floors;
  }

  // sqft üçün Getter (Building klasından miras alınır, lakin tapşırıq tələbi üçün qeyd edək)
  get sqft() {
    return this._sqft;
  }

  // floors üçün Getter
  get floors() {
    return this._floors;
  }

  /**
   * Valideyn klasda məcburi olan metodu override edirik.
   * @returns {String}
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
