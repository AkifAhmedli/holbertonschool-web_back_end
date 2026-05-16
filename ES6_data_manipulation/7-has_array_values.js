/**
 * Massivdəki bütün elementlərin Set daxilində olub-olmadığını yoxlayır.
 * @param {Set} set - Elementlərin axtarılacağı çoxluq.
 * @param {Array} array - Axtarılan elementlər massivi.
 * @returns {Boolean} Bütün elementlər varsa true, yoxsa false.
 */
export default function hasValuesFromArray(set, array) {
  // every() metodu massivdəki hər bir element üçün şərti yoxlayır.
  // Əgər bircə element belə şərti ödəməsə, dərhal false qaytarır.
  return array.every((element) => set.has(element));
}
