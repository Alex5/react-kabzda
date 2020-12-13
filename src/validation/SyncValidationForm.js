export const requiredField = values => {
    if (values) return undefined;
    return "Field is required"
}

const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(30)

const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength2 = minLength(2)


/*export const maxLength = (maxLength) => values => {
    if (values.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined;
}*/

