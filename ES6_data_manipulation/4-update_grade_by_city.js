/**
 * Müəyyən bir şəhərdəki tələbələrin qiymətlərini yeniləyir.
 * @param {Array} students - Tələbə obyektləri massivi.
 * @param {String} city - Şəhər adı.
 * @param {Array} newGrades - Yeni qiymət obyektləri massivi.
 * @returns {Array} Qiyməti yenilənmiş tələbələrin massivi.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    // 1-ci addım: Yalnız göstərilən şəhərdəki tələbələri seçirik
    .filter((student) => student.location === city)
    // 2-ci addım: Seçilmiş tələbələrin obyektinə 'grade' sahəsini əlavə edirik
    .map((student) => {
      // newGrades massivində bu tələbənin ID-sinə uyğun gələn obyekti axtarırıq
      const gradeObj = newGrades.filter((grade) => grade.studentId === student.id)[0];

      return {
        ...student,
        // Əgər qiymət tapılsa onu mənimsədirik, yoxsa 'N/A' yazırıq
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
