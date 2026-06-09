function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }
  return str.split('').reverse().join('');
}

function isPalindrome(str) {
  if (typeof str !== 'string') {
    return false;
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}

module.exports = { capitalize, reverseString,  isPalindrome};