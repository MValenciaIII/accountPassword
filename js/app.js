/*
Require certain special characters for password.
Use regex to fulfill these special requirements
Require a first and last name.
Require a email.
Password must have at least 8 characters but no more than 20; Must contain at least one special charcter(!, @, #, $, %, &); Must contain at least one uppercase letter; must contain at least one lowercase letter; Must contain at least one number; cannot contain spaces
*/

function submit() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var match = document.getElementById('passwordConfirm');


    // function first() {
    //     if(fName.value == 0) {
    //         console.log('You forgot to fill in your First name.')
    //     }
    // }

    if (fName.length == 0) {
        console.log('You forgot to fill in your First name.')
    }
    
}