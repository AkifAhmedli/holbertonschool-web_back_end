export default class Airport {
  /**
   * @param {String} name - Hava limanının adı
   * @param {String} code - Hava limanının kodu (məs: SFO, GYD)
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // name üçün Getter və Setter
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  // code üçün Getter və Setter
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  /**
   * Obyektin default string təsvirini (tag) dəyişir.
   * Bu, obyekt console-da çap olunanda və ya toString() çağırılanda işə düşür.
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
