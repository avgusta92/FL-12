let email = prompt('Please enter your email address');

const FIVE_SYMBOLS = 5,
    SIX_SYMBOLS = 6;

let isValidEmail = false;
let isValidPassword = false;
let isValidChangePassword = false;
let isValidOldPassword = false;
let isValidNewPassword = false;

if (!email) {
    alert('Canceled');
} else if (email.length < FIVE_SYMBOLS) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    isValidEmail = true;
} else {
    alert('I don’t know you');
}

if (isValidEmail) {
    let password = prompt('Please enter your password');

    let passwordForUser = email === 'user@gmail.com' && password === 'UserPass';
    let passwordForAdmin = email === 'admin@gmail.com' && password === 'AdminPass';

    if (!password) {
        alert('Canceled');
    } else if (passwordForUser || passwordForAdmin) {
        isValidPassword = true;
    } else {
        alert('Wrong password');
    }
}

if (isValidPassword) {
    isValidChangePassword = confirm('Do you want to change your password?');

    if (!isValidChangePassword) {
        alert('You have failed the change');
    }
}

if (isValidChangePassword) {
    let oldPassword = prompt('Write the old password');

    let passwordForUser = email === 'user@gmail.com' && oldPassword === 'UserPass';
    let passwordForAdmin = email === 'admin@gmail.com' && oldPassword === 'AdminPass';

    if (!oldPassword) {
        alert('Canceled');
    } else if (passwordForUser || passwordForAdmin) {
        isValidOldPassword = true;
    } else {
        alert('Wrong password');
    }
}

let newPassword = '';

if (isValidOldPassword) {
    newPassword = prompt('Please enter your new password');

    if (newPassword.length < SIX_SYMBOLS) {
        alert('It’s too short password. Sorry');
    } else if (newPassword) {
        isValidNewPassword = true;
    }
}

if (isValidNewPassword) {
    let newPasswordCheck = prompt('Please enter your new password again');

    if (newPasswordCheck === newPassword) {
        alert('You have successfully changed your password');
    } else {
        alert('You wrote the wrong password');
    }
}