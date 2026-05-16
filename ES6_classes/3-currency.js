export default class Currency {
  /**
   * @param {String} code - Valyutanın simvolu və ya kodu (məs: $, AZN)
   * @param {String} name - Valyutanın adı (məs: Dollars, Manat)
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Code üçün Getter və Setter
  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Name üçün Getter və Setter
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Valyutanın tam adını və kodunu formatlı şəkildə qaytarır.
   * @returns {String} Format: name (code)
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
