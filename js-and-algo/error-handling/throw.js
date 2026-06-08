
function parseJSON(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (err) {
    console.error("Failed to parse JSON:", error.message);
    throw err;    // re-throw the error (bubble the it up)
  }
}