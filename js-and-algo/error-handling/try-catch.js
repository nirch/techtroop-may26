

try {
  const result = JSON.parse("invalid JSON");
  console.log(result);
} catch(err) {
  console.error("JSON parsing failed: ", err.message) 
}


console.log("eof");