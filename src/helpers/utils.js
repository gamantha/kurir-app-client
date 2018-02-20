// Email Validation
export function validateEmail(inputvalue) {
    const pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9_.-]{2,}))+\.(([a-zA-Z]{1,}))$/;
    return !!pattern.test(inputvalue);
}

// Name Validation
export function validateName(inputvalue) {
    const pattern = /([^a-zA-Z0-9_ -])/g;
    return !pattern.test(inputvalue);
}
