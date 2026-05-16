/**
 * Set daxilindəki elementlərdən müəyyən prefix ilə başlayanları seçir 
 * və prefix-siz hissələrini '-' ilə birləşdirir.
 * @param {Set} set - Elementlər çoxluğu.
 * @param {String} startString - Axtarılan başlanğıc mətni.
 * @returns {String} Birləşdirilmiş nəticə mətni.
 */
export default function cleanSet(set, startString) {
  // Əgər startString boşdursa və ya string tipində deyilsə, dərhal boş string qaytarırıq.
  if (!startString || typeof startString !== 'string') {
    return '';
  }

  const parts = [];

  // Set üzərində dövr edirik
  for (const value of set) {
    // Əgər dəyər string-dirsə və startString ilə başlayırsa
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Prefix-dən sonrakı hissəni kəsib massivə əlavə edirik
      parts.push(value.slice(startString.length));
    }
  }

  // Massivdəki hissələri '-' işarəsi ilə birləşdiririk
  return parts.join('-');
}
