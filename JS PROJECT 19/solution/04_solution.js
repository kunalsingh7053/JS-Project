// 4).The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.
let password = "k8unal123";

function checkpassword(){
    if(password.length < 8)
    {
        return false;
    }
     if(password.toLowerCase() == password && password.toUpperCase() != password)
    {
        return false;
    }
     if(password.toUpperCase() == password && password.toLowerCase() != password)
    {
        return false;

    }
    if(password.match(/[0-9]/) == null){
        return false;
    }
   return true;
    
}
console.log(checkpassword(password));
