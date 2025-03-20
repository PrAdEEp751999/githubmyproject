var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");
var success = true

form.addEventListener("submit",function(e){

    e.preventDefault();
    validateInputs();

})

function  validateInputs(){
    var usernameVal = username.value.trim();
    var emailVal = email.value.trim();
    var passwordVal = password.value.trim();
    var cpasswordVal = cpassword.value.trim();

    if(usernameVal===''){
        success = false
        setError(username,"Username is required")
    }
    else{
        setSuccess(username)
    }

    if(emailVal===''){
        success = false
        setError(email,'Email is required')
    }

    else if(!validateEmail(emailVal)){
        setError(password,'Password is required')
    }

    else{
        setSuccess(email)
    }

    if(passwordVal===''){
        success = false
        setError(password,'Password is required')
    }

    else if(passwordVal.length<8){
        setError(password,'Password must be atleast 8 long')
    }

    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success = false
        setError(cpassword,'Confirm password is required')
    }

    else if(cpassword===passwordVal){
        setError(cpassword,'Password does not match')
    }

    else{
        setSuccess(cpassword)
    }

    return success;
}

//elememt - password, msg - password is required

function setError(element,message){
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

}

function setSuccess(element){
    var inputGroup = element.parentElement;
    var errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

}

const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };



