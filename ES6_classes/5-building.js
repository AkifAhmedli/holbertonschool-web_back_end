export default class Building {
  /**
   * @param {Number} sqft - Binanın sahəsi (kvadrat fut).
   */
  constructor(sqft) {
    this._sqft = sqft;

    /*
     * Abstrakt klas məntiqi:
     * Əgər bu klasdan törəyən klas 'evacuationWarningMessage' metodunu
     * override etməyibsə, xəta mesajı qaytarırıq.
     */
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  // sqft üçün Getter
  get sqft() {
    return this._sqft;
  }
}
