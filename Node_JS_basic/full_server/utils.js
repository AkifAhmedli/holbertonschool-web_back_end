import fs from 'fs';

/**
 * Reads a student database CSV file asynchronously.
 * @param {string} filePath - Path to the database file.
 * @returns {Promise<Object>} Object mapping fields to arrays of first names.
 */
const readDatabase = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const header = lines.shift();
    if (!header) {
      resolve({});
      return;
    }

    const studentsByField = {};

    for (const line of lines) {
      const studentData = line.split(',');

      if (studentData.length >= 4) {
        const firstName = studentData[0].trim();
        const field = studentData[3].trim();

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstName);
      }
    }
    resolve(studentsByField);
  });
});

export { readDatabase };
export default readDatabase;
