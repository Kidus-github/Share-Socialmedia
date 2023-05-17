// password icon for visible and invisible 

let passwordField = document.querySelector("input[type= 'password']");
let passwordToggle= document.querySelector(".eyetoggle");

passwordToggle.onclick = () =>{
    if(passwordField.type == "password"){
        passwordField.type = "text"
        passwordToggle.style.color = "#0718c4";

    }else{
        passwordField.type = "password";
        passwordToggle.style.color = "#958F8F";
    } 
}

// create new account show and hide

let createNewAccount = document.querySelector(".create_new");
let FormSection = document.querySelector(".form_section");
let FormSectionClose = document.querySelector(".fa-x");

createNewAccount.onclick = ()=>FormSection.classList.remove("hide");
FormSectionClose.addEventListener("click", ()=>{FormSection.classList.add("hide");})


// 

