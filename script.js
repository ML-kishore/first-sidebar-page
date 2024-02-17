

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the password value
    var password = document.getElementById('password').value;

    // Check the length of the password and provide feedback
    var strength = getStrength(password);

   var passStrength = document.getElementById('passwordStrength')
   passStrength.style.color = getColorForStrength(strength);
   passStrength.textContent = 'password Strength :' + strength;
});

function getStrength(password) {
    if (password.length < 5) {
        return 'Weak';
    } else if (password.length >= 5 && password.length <= 8) {
        return 'Good';
    } else {
        return 'Strong';
    }
}

function getColorForStrength(strength) {
    switch(strength){
        case 'Weak' :
            return 'red';
        case 'Good' :
            return 'green';
        case 'Strong' :
            return 'blue';
        default:
            return 'black';
    }
}