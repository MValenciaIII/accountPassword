/*
Require certain special characters for password.
Use regex to fulfill these special requirements
Require a first and last name.
Require a email.
Password must have at least 8 characters but no more than 20; Must contain at least one special charcter(!, @, #, $, %, &); Must contain at least one uppercase letter; must contain at least one lowercase letter; Must contain at least one number; cannot contain spaces
*/
//eventlistener (keyup, variable)
function submit() {
    //Variable grabbing the Input value using Id.
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var match = document.getElementById('passwordConfirm').value;

    //Regex requirements
    var regexLowercase = new RegExp("(?=.*[a-z])");
    var regexUpperCase = new RegExp("[A-Z]");
    var regexNumber = new RegExp('(?=.*[0-9])');
    var regexEmail = new RegExp("[a-zA-z0-9]@");
    var regexSpecial = new RegExp("(?=.*[@$!%*?&])");
    var allRequirements = new RegExp("[a-zA-z@$!%*#?&\d]")
    // var correctFormat = password.match(allRequirements);


    //Variables containing regex requirements to use for conditionals
    var correctEmailFormat = email.search(regexEmail);
    var uppercase = password.search(regexUpperCase);
    var lowercase = password.search(regexLowercase);
    var number = password.search(regexNumber);
    var special = password.search(regexSpecial);


    // var search = []

    // function first() {
    //     if(fName.value == 0) {
    //         console.log('You forgot to fill in your First name.')
    //     }
    // }
    // Make a conditional when password is not long enough or too long alerts.

    if (fName.length == 0) {
        alert('You forgot to fill in your First name.')
    } 
    if (lName.length == 0) {
        alert("Please input your last name.")
    } 
    if (email.length == 0) {
        alert("Please input your email.")
    } else if (correctEmailFormat) {
        alert('Make sure email is valid.')
    }
    if (password.length > 8 && password.length < 20) {
        if (!uppercase) {
            if (!lowercase) {
                if (!number) {
                    if (!special) {
                        if (password == match) {
                            alert('Account Created.')
                        } else {
                            alert('Passwords do not match.')
                        }
                    } else if (special) {
                        alert('Special Character needed.')
                    }
                } else if (number) {
                    alert('No Number character.')
                }
            } else if (lowercase) {
                alert('No Lowercase letter.')
            }
        } else if (uppercase){
            alert('No Uppercase letter.')
        }
    } else {
        alert('Need to be at least 8-20 characters.')
    }
}