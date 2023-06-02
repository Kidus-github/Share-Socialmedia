

fetch('msglist.php')
  .then(response => response.json())
  .then(data => {
    // Process the received data
    console.log(data); // Print the data to the console

    data.forEach((sender)=>{createMessage(sender)});

    
    
    // Access the grouped messages
    // for (const senderId in data) {
    //   const sender = data[senderId];
    //   const senderId = sender.senderId;
    //   const profilePicture = sender.profilePicture;
    //   const fname = sender.fname;
    //   const lname = sender.lname;
    //   const messages = sender.messages;

    //   // Access the messages for each sender
    //   for (const message of messages) {
    //     const messageId = message.message_id;
    //     const content = message.content;
        // Access other properties of the message as needed
        
        // Process the message data as desired
        // ...
    //   }
    // }
  })
  .catch(error => {
    console.log('Error:', error);
  });








export function Message (msg_id, sender_id, recipient_id, content, timestamp, is_read, is_deleted, attachment, is_forwarded, forwarded_to_id, reply_to_id){
    return{
        msg_id,
        sender_id,
        recipient_id,
        content,
        timestamp,
        is_read,
        is_deleted,
        attachment,
        is_forwarded,
        forwarded_to_id,
        reply_to_id
    };
}

function createMessage(message){
    let msg_card = document.createElement('div');
    msg_card.classList.add('msg_card');
    msg_card.setAttribute('data-userId',  (message.id).toString());

    msg_card.addEventListener('click', (e) =>{
        console.log('msg_card clicked');
        let id =e.target.dataset.userid;
        open(message.id);
        let 

    });




    let msg_pro_pic = document.createElement('img');
    msg_pro_pic.classList.add('msg_pro_pic');
    msg_pro_pic.src = message.profile_picture;

    let msghiglight = document.createElement('div');
    msghiglight.classList.add('msghiglight');
    
    let username = document.createElement('h3');
    username.innerHTML = message.fname + ' ' + message.lname;


    let highlight = document.createElement('p');
    let time = document.createElement('span');

    highlight.innerHTML = message.last_message;
    time.innerHTML =lasttime();

    highlight.appendChild(time);

    msghiglight.appendChild(username);
    msghiglight.appendChild(highlight);

    msg_card.appendChild(msg_pro_pic);
    msg_card.appendChild(msghiglight);


    let messengers = document.getElementsByClassName('messengers')[0];
    
    messengers.appendChild(msg_card);

}



function lasttime(){
    return "12hr"
}

// let Messagearray =[
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null),
//     Message(23, 32,32,"abebe beso bela",2343,true,false,null,null,null,null)
// ]; 

// Messagearray.forEach((message)=>createMessage(message));
function open(id){
    console.log('thie id to be opened is ' + id);
    // console.log('this it the recipient id ' + recipient_id);
    setInterval(() =>{
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "get-chat.php", true);
        xhr.onload = () => {
            if(xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status === 200){
                    let data = xhr.response;
                    chatBox.innerHTML = data;
                }
            }
        }
        let formData = new FormData(form);
        //the user id is found form the click of the message list
        formData.append('incoming_id', id);
        // formData.append('outgoing_id', recipient_id);
    
        xhr.send(formData);
        
    }, 500);

    form.onsubmit = (e)=>{
        e.preventDefault();
    }
    
    sendBtn.onclick = () =>{
    
        console.log("send clicked");
    
        let xhr = new XMLHttpRequest(); //creating xml object
        xhr.open("post", "insert-chat.php", true);
        xhr.onload = () => {
            if(xhr.readyState == XMLHttpRequest.DONE){
                if(xhr.status == 200){
                    input_field.value = '';
                    let data = xhr.response; 
                    if(data == "success"){
                        console.log(data);
                    }
                    console.log(data); 
                }
            }
        }
        let formData = new FormData(form);
        //the user id is found form the click of the message list
        formData.append('incoming_id', id);//userId);
    
        xhr.send(formData);
    }
}






const form = document.querySelector('.typing-area'),
input_field = form.querySelector('.input-field'),
sendBtn = form.querySelector('button'),
chatBox = document.querySelector('.chat_box');







