// password icon for visible and invisible 

let passwordFieldLogin = document.querySelector(".login input[type= 'password']");
let passwordFieldSignup = document.querySelector(".form input[type= 'password']");

let passwordToggleLogin= document.querySelector(".eye-login");
let passwordToggleSignup= document.querySelector(".eye-signUp");

passwordToggleLogin.onclick = () =>{
    if(passwordFieldLogin.type == "password"){
        passwordFieldLogin.type = "text"
        passwordToggleLogin.style.color = "#0718c4";

    }else{
        passwordFieldLogin.type = "password";
        passwordToggleLogin.style.color = "#958F8F";
    } 
}

passwordToggleSignup.onclick = () =>{
    if(passwordFieldSignup.type == "password"){
        passwordFieldSignup.type = "text"
        passwordToggleSignup.style.color = "#0718c4";

    }else{
        passwordFieldSignup.type = "password";
        passwordToggleSignup.style.color = "#958F8F";
    } 
}

// create new account show and hide

let createNewAccount = document.querySelector(".create_new");
let FormSection = document.querySelector(".form_section");
let FormSectionClose = document.querySelector(".fa-x");

createNewAccount.onclick = ()=>FormSection.classList.remove("hide");
FormSectionClose.addEventListener("click", ()=>{FormSection.classList.add("hide");})


// 

