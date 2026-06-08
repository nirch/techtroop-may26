const fs = require('fs');


let file;
try {
  file = fs.openSync('data.txt', 'r');
  try {
    const data = fs.readFileSync(file, 'utf8');
    console.log('File processed');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    fs.closeSync(file);
    console.log('Cleanup completed');
  }
} catch (error) {
  console.error('Error:', error.message);
}