// Email Validation
export function validateEmail(inputvalue) {
  const pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  return !!pattern.test(inputvalue);
}

// Name Validation
export function validateName(inputvalue) {
  const pattern = /([^a-zA-Z0-9_ -])/g;
  return !pattern.test(inputvalue);
}
