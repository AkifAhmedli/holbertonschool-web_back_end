/**
 * Bütün tələbə ID-lərinin cəmini hesablayır.
 * @param {Array} students - Tələbə obyektləri massivi.
 * @returns {Number} ID-lərin cəmi.
 */
export default function getStudentIdsSum(students) {
  /*
   * reduce funksiyası iki əsas arqument qəbul edir:
   * 1. Akkumulyator (sum) - yığılan nəticə.
   * 2. Cari element (student) - massivdəki hazırkı obyekt.
   */
  return students.reduce((sum, student) => sum + student.id, 0);
}
