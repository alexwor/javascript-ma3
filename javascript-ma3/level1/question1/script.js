//Use RegEx to validate form
function validateEmail(elementValue)
{
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
return emailPattern.test(elementValue);
}
console.log(validateEmail('test@test'));

function validateTelephone(elementValue)
{
var telephonePattern = /^[0-9]{8}$/;
return telephonePattern.test(elementValue);
}
console.log(validateTelephone('12345678'));
