//import from user .js the object diffinition 
import {User} from './user.js'
// password icon for visible and invisible

console.log('login dot js file is In')

let passwordFieldSignup = document.querySelector(".form input[type= 'password']");
let passwordToggleSignup= document.querySelector(".eye-signUp");



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

let modal = document.querySelector(".form_section");
let FormSectionClose = document.querySelector(".fa-x");
const SignUpform = document.querySelector(".SignUpform");
let continuteBtn = document.querySelector(".signUp input"); 
let Signuperorr = document.querySelector(".signup-error");

SignUpform.onsubmit = (e)=>{
    e.preventDefault();//preventing form from submitting automatically
}
continuteBtn.onclick = () => { 
    
    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("post", "signup.php", true);
    xhr.onload = () => {
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response; 
                if(data == "success"){
                    location.href = "index.php";
                }else{
                    Signuperorr.innerHTML = data;
                    Signuperorr.style.display = "block";
                  
                }
                // console.log(data); 
            }
        }
    }
    let formData = new FormData(SignUpform);

    xhr.send(formData);
}



FormSectionClose.addEventListener("click", ()=>{
    console.log('hide create new account'); 
    window.location.href = 'loginpage.php';
    // modal.close();
});


// 

