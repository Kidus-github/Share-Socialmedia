const form = document.querySelector('.typing-area'),
input_field = form.querySelector('.input-field'),
sendBtn = form.querySelector('button');



sendBtn.onclick = () =>{

    console.log("send clicked");

    let xhr = new XMLHttpRequest(); //creating xml object
    xhr.open("post", "chat.php", true);
    xhr.onload = () => {
        if(xhr.readyState == XMLHttpRequest.DONE){
            if(xhr.status == 200){
                let data = xhr.response; 
                if(data == "success"){
                    console.log(data);
                    location.href = "index.php";
                }else{
                    loginerror.innerHTML = data;
                    loginerror.style.display = "block";
                  
                }
                console.log(data); 
            }
        }
    }
    let formData = new FormData(login);

    xhr.send(formData);
}