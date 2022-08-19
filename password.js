// create a variable called password, set value as a string

const password = 'Checkpass'

// write conditional statement that checks if password meets the following constraints:


// At least 10 chars long
// contains at least 1 letter and 1 number

// If the password meets the constraint, console log a success message.

// If the password fails the constraint, console log a failure message.

if (password.length >= 10 && /\d/.test(password)) {
    console.log('Success!')
} else {
    console.log('Password failure!')
}

// Test out your conditional by changing the value of your password variable 
// and running your file!

