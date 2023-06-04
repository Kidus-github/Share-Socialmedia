

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
        let chatbox = document.querySelector('.chat_box');
        chatbox.classList.remove('hide');
        let typing_area = document.querySelector('.typing-area');
        typing_area.classList.remove('hide');
        open(message.id);
        profile_show(message);
        


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

function profile_show(message){
    // if(isclicked){
        let profilepreviewsection = document.createElement('div');
        profilepreviewsection.classList.add('profilepreviewsection');

        let profile = document.createElement('img');
        profile.src = message.profile_picture;
        profile.classList.add('profile');

        let usernameandtimeline = document.createElement('div');
        usernameandtimeline.classList.add('usernameandtimeline');

        let username = document.createElement('h3');
        let timeline = document.createElement('p');

        username.innerHTML =  message.fname + ' ' + message.lname;
        timeline.innerHTML = 'Active ' + lasttime() + ' ago';

        profilepreviewsection.appendChild(profile);
        profilepreviewsection.appendChild(usernameandtimeline);

        usernameandtimeline.appendChild(username);
        usernameandtimeline.appendChild(timeline);

        let calls_info = document.createElement('div');
        calls_info.classList.add('calls_info');

        let phone = document.createElement('div');
        phone.classList.add('phone');
        let video = document.createElement('div');
        video.classList.add('video');
        let info = document.createElement('div');
        info.classList.add('info');

        calls_info.appendChild(phone);
        calls_info.appendChild(video);
        calls_info.appendChild(info);


        let profilePreviewAndCalls = document.querySelector('.profilePreviewAndCalls');
        profilePreviewAndCalls.appendChild(profilepreviewsection);
        profilePreviewAndCalls.appendChild(calls_info);
    // }
    // isclicked = false;
}

// document.addEventListener('DOMContentLoaded', () => {
//     const scrollableElement = document.getElementById('scrollable-element');
//     scrollableElement.scrollTop = scrollableElement.scrollHeight;
//   });




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
    console.log('this id is opened  ' + id);
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







