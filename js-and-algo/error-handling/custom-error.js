function DivideByZeroError(message, code) {
  const error = new Error(message);
  error.name = "DivideByZeroError";
  error.code = code;
  return error;
}

function divide(a, b) {
  if (b === 0) {
    throw DivideByZeroError("Cannot divide by zero", 506);
  }
  return a / b;
}

const result = divide(5, 0);
