// create a variable called password, set value as a string

const password = 'Checkpass1#'

// write conditional statement that checks if password meets the following constraints:
// At least 10 chars long
// contains at least 1 letter and 1 number
// If the password meets the constraint, console log a success message.
// If the password fails the constraint, console log a failure message.







// /\d/ = checks for any digit from 0 - 9
// .test() = returns 'true' if expression is matched in string else returns 'false'
// extra credit : I'm checking for capital letters as well using /[A-Z]/
// extra credit : I'm checking for special characters with /[-+_!@#$%^&*., ?]/

if (password.length >= 10 && /\d/.test(password) && /[A-Z]/.test(password) && /[-+_!@#$%^&*., ?]/.test(password) ) {
    console.log('Success!')
} else {
    console.log('Password failure!')
}



// Test out your conditional by changing the value of your password variable 
// and running your file!

// other constraints
