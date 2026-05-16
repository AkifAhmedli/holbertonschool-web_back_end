/**
 * Baqqal siyahısını Map formatında qaytarır.
 * @returns {Map<string, number>} Ərzaq adı və miqdarı olan Map.
 */
export default function groceriesList() {
  // Yeni bir Map obyekti yaradırıq.
  // Constructor daxilində massivlər massivi (array of arrays) ötürməklə
  // başlanğıc dəyərləri birbaşa təyin edə bilərik.
  const list = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return list;
}
