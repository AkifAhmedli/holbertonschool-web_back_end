/**
 * Massivdəki elementlərdən unikal bir Set yaradır.
 * @param {Array} array - Hər hansı tipdə elementləri olan massiv.
 * @returns {Set} Unikal elementlərdən ibarət Set obyekti.
 */
export default function setFromArray(array) {
  // JavaScript-də Set constructor-una birbaşa massiv ötürməklə 
  // avtomatik olaraq dublikatları silib yeni bir Set yarada bilərik.
  return new Set(array);
}
