export default class HolbertonClass {
  /**
   * @param {Number} size - Sinfin ölçüsü.
   * @param {String} location - Sinfin yerləşdiyi yer.
   */
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  /**
   * Obyekt Number tipinə cast olunduqda (çevrildikdə) çağırılır.
   * @returns {Number}
   */
  valueOf() {
    return this._size;
  }

  /**
   * Obyekt String tipinə cast olunduqda (çevrildikdə) çağırılır.
   * @returns {String}
   */
  toString() {
    return this._location;
  }
}
