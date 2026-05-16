import ClassRoom from './0-classroom.js';

/**
 * 3 ədəd ClassRoom obyektindən ibarət massiv qaytarır.
 * @returns {ClassRoom[]} Massiv: [19, 20, 34] ölçülərində.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34),
  ];
}
