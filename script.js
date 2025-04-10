let getUserdetails = [];

function loginPage() {
    signuppage.style.display = 'none';
    loginpage.style.display = 'block';
}

function showSignup() {
    loginpage.style.display = 'none';
    signuppage.style.display = 'block';
}


function signUp() {
    let email = document.getElementById('email');
    let passwordInp = document.getElementById('password');

    let phoneRegex = /^\+234[0-9]{10,}$/;
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (emailRegex.test(email.value) ||
        passwordRegex.test(passwordInp.value)
    ) {
        if (!emailRegex.test(email.value)) {
            alert('Invalid Email');
            return;
        }
        if (!passwordRegex.test(passwordInp.value)) {
            alert('Invalid Password');
            return;
        }
    } else {
        alert('Invalid Inputs');
        return;
    }

    let user = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: passwordInp.value,
        confirmPassword: confirmpassword.value,
    };

    if (passwordInp.value === confirmpassword.value) {
        if (user.firstname === '' || user.lastname === '' || user.email === '' || user.password === '') {
            alert('Input all Fields');
            return;
        }

        let getUserdetails = JSON.parse(localStorage.getItem('users')) || [];
        let emailExists = getUserdetails.some(user => user.email === email.value);

        if (emailExists) {
            alert('Email already exists, try with a new email');
            return;
        }

        getUserdetails.push({
            email: user.email,
            password: user.password,
        });

        localStorage.setItem('users', JSON.stringify(getUserdetails));
        firstname.value = '';
        lastname.value = '';
        confirmpassword.value = '';
        loginPage();

        alert('Sign-up successful, Proceed to Login');
    } else {
        alert('Passwords do not match, Please re-enter');
        return;
    }
}

function loginBtn() {
    let getData = JSON.parse(localStorage.getItem('users'));

    let userExists = getData.find(user => user.email === useremail.value);

    if (userExists && userExists.password === userpassword.value) {
        window.location.href = "./otherhtmlpages/dashboard.html";
    } else {
        alert('Incorrect Email or Password');
    }
}

function showPassword() {
    let close = document.getElementById('close');
    password.type = 'text';
    eye.style.display = 'none';
    close.style.display = 'block';
}

function hidePassword() {
    let close = document.getElementById('close');
    password.type = 'password';
    close.style.display = 'none';
    eye.style.display = 'block';
}

function showNavlist() {
    navlist.style.display = 'block';
}

function hideNavlist() {
    navlist.style.display = 'none';
}

function logoutBtn() {
    window.location.href = "../index.html";
}