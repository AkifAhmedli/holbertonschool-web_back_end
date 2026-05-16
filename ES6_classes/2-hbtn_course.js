export default class HolbertonCourse {
  /**
   * @param {String} name
   * @param {Number} length
   * @param {String[]} students
   */
  constructor(name, length, students) {
    // İlkin yaradılış zamanı tip yoxlaması
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // Name üçün Getter və Setter
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Length üçün Getter və Setter
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Students üçün Getter və Setter
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((s) => typeof s === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
