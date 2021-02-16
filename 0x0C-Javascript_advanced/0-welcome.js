/**
 * 
 * @param {string} firstName 
 * @param {string} lastName 
 */

function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }
    displayFullName();
}
