/**
 * Map daxilində miqdarı 1 olan bütün elementləri 100 ilə əvəz edir.
 * @param {Map} map - Yenilənəcək Map obyekti.
 * @returns {Map} Yenilənmiş Map obyekti.
 * @throws {Error} Əgər ötürülən arqument Map deyilsə.
 */
export default function updateUniqueItems(map) {
  // Arqumentin Map olub-olmadığını yoxlayırıq
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Map-in hər bir elementi üzərində dövr edirik
  // forEach funksiyasında birinci arqument 'value' (miqdar), 
  // ikinci arqument isə 'key' (ərzaq adı) olur.
  map.forEach((quantity, item) => {
    if (quantity === 1) {
      // .set() metodu ilə mövcud dəyəri yeniləyirik
      map.set(item, 100);
    }
  });

  return map;
}
