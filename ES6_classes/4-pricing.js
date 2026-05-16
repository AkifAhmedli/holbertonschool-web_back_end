import Currency from './3-currency.js';

export default class Pricing {
  /**
   * @param {Number} amount - Məbləğ
   * @param {Currency} currency - Valyuta obyekti (Currency klasından)
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Amount üçün Getter və Setter
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // Currency üçün Getter və Setter
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  /**
   * Tam qiyməti formatlı şəkildə qaytarır.
   * @returns {String} Format: amount currency_name (currency_code)
   */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
   * Qiyməti konvertasiya edən static metod.
   * @param {Number} amount
   * @param {Number} conversionRate
   * @returns {Number}
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Both amount and conversionRate must be numbers');
    }
    return amount * conversionRate;
  }
}
