/**
 * Tələbə obyektlərindən ibarət massivdən yalnız ID-ləri çıxarır.
 * @param {Array} students - Tələbə obyektləri massivi.
 * @returns {Number[]} ID-lərdən ibarət massiv və ya boş massiv.
 */
export default function getListStudentIds(students) {
  // Arqumentin massiv olub-olmadığını yoxlayırıq
  if (!Array.isArray(students)) {
    return [];
  }

  // Map funksiyası ilə hər obyektin içindən yalnız 'id' dəyərini götürürük
  return students.map((student) => student.id);
}
