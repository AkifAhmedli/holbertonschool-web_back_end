/**
 * Tələbələri yerləşdikləri şəhərə görə filtrləyir.
 * @param {Array} students - Tələbə obyektləri massivi.
 * @param {String} city - Axtarılan şəhər adı.
 * @returns {Array} Şərtə uyğun tələbələrin massivi.
 */
export default function getStudentsByLocation(students, city) {
  // students massivinin içindəki hər bir tələbənin location xüsusiyyətini yoxlayırıq
  return students.filter((student) => student.location === city);
}
