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

    let user = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        confirmPassword: confirmpassword.value,
    }
    if (password.value === confirmpassword.value) {

        if (user.firstname === '' || user.lastname === '' || user.email === '' || user.password === '') {
            alert('Input all Field')
            return;
        } else {
            alert('Sign-up successful, Proceed to Login')
        }
    } else {
        alert('Password do not match, Please re- enter')
        return;
    }
    user = {
        email: email.value,
        password: password.value,
    }
   
    getUserdetails.push(user);
    localStorage.setItem('users', JSON.stringify(getUserdetails));
    firstname.value = '';
    lastname.value = '';
    confirmpassword.value = '';
    loginPage()
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

function showNavlist(){
    navlist.style.display = 'block';
}

function hideNavlist(){
    navlist.style.display = 'none';
}

function logoutBtn(){
    window.location.href = "../index.html";
}