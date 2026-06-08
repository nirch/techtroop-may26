
// Example 1

try {
  try {
    throw new Error("oops");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output:
// finally
// outer oops

// Example 2

try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}

// Output
// inner oops
// finally

// Example 3

try {
  try {
    throw new Error("oops");
  } catch (ex) {
    console.error("inner", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("outer", ex.message);
}


// Output
// inner oops
// finally
// outer oops