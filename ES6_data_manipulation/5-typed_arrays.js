/**
 * Müəyyən ölçüdə ArrayBuffer yaradır və göstərilən mövqeyə Int8 dəyəri yazır.
 * @param {Number} length - Buffer-in ümumi ölçüsü (baytlarla).
 * @param {Number} position - Dəyərin yazılacağı indeks.
 * @param {Number} value - Yazılacaq Int8 dəyəri (-128-dən 127-ə qədər).
 * @returns {DataView} Buffer-in mənzərəsi (DataView).
 * @throws {Error} Əgər mövqe buffer-in hüdudlarından kənardırsa.
 */
export default function createInt8TypedArray(length, position, value) {
  // 1. Verilən ölçüdə xam yaddaş sahəsi (buffer) ayırırıq
  const buffer = new ArrayBuffer(length);
  
  // 2. Buffer üzərində əməliyyat aparmaq üçün DataView yaradırıq
  const view = new DataView(buffer);

  // 3. Mövqeyin (position) hüdudlar daxilində olub-olmadığını yoxlayırıq
  // Əgər mövqe mənfidirsə və ya buffer ölçüsünə bərabər/böyükdürsə xəta atırıq
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // 4. Göstərilən mövqeyə Int8 (8-bit signed integer) dəyərini yazırıq
  view.setInt8(position, value);

  // 5. Nəticə olaraq DataView obyektini qaytarırıq
  return view;
}
