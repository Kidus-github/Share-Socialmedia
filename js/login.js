let passwordToggleLogin= document.querySelector(".eye-login");
let passwordFieldLogin = document.querySelector(".login input[type= 'password']");


passwordToggleLogin.onclick = () =>{
    if(passwordFieldLogin.type == "password"){
        passwordFieldLogin.type = "text"
        passwordToggleLogin.style.color = "#0718c4";

    }else{
        passwordFieldLogin.type = "password";
        passwordToggleLogin.style.color = "#958F8F";
    } 
}





let createNewAccount = document.querySelector(".create_new");


createNewAccount.onclick = ()=>{
    console.log('create new account'); 
    window.location.href = 'signupPage.php';
    // modal.showModal();
};


let login = document.querySelector(".login");
let loginbtn = document.querySelector(".loginbtn");
let loginerror = document.querySelector(".login-error");


login.onsubmit = (e)=>{
    e.preventDefault();//preventing form from submitting automatically
}
loginbtn.onclick = () => { 
    // console.log("login clicked");

    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("post", "login.php", true);
    xhr.onload = () => {
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response; 
                if(data == "success"){
                    // console.log(data);
                    location.href = "index.php";
                }else{
                    loginerror.innerHTML = data;
                    loginerror.style.display = "block";
                  
                }
                // console.log(data); 
            }
        }
    }
    let formData = new FormData(login);

    xhr.send(formData);
}