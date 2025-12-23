function sendForm(event){
event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let dob = document.getElementById('dob').value;
    let address = document.getElementById('address').value;
    let round = document.getElementById('round').value;

    let gender = document.querySelector('input[name="gender"]:checked');
    let education = document.querySelectorAll('input[name="education"]:checked');

    let output = 
    'Name: ' + name + '(\n)' 
    'Email: ' + email + '(\n)' 
    'Password: ' + password + '(\n)' 
    'Date of Birth: ' + dob + '(\n)' 
    'Address: ' + address + '(\n)' 
    'Round: ' + round + '(\n)' 
    'Gender: ' + gender + '(\n)' 
    'Education: ' + education + '(\n)' 




}

