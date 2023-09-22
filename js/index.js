// import {Post} from './post.js'
 import {User} from './user.js'
 import {Friends} from './friends.js'
// import {like} from ''

let explore = document.getElementsByClassName('Explore');
let home = document.getElementsByClassName('Home');
let message = document.getElementsByClassName('Message');
let body= document.getElementsByTagName('body')[0];
let search = document.querySelector('.Search');
let reels = document.querySelector('.Reels');
let headermsg = document.querySelector('.header_message');
let setting = document.querySelector('.Settings');
// let sharePhoto = document.getElementsByClassName('photo-video');




let profile = document.getElementsByClassName('user');

let profilepic = document.getElementsByClassName('profile');
let profilepic2 = document.getElementsByClassName('profile-img');


// let msg= document.querySelector('.msg p');

explore[0].addEventListener('click', ()=>{
        console.log('explore clicked');
        window.location.assign("explore.php");

    });

profile[0].addEventListener('click', ()=>{
    console.log('profile clicked');
    window.location.assign("profile.php");

});
headermsg.onclick = ()=>{
  console.log('header message clicked');
  window.location.assign("message.php");

};
message[0].addEventListener('click', ()=>{
    console.log('message clicked');
    window.location.assign("message.php");
    
});

home[0].addEventListener('click', ()=>{
    console.log('explore clicked');
    window.location.assign("index.php");
    

});
reels.addEventListener('click', ()=>{
    console.log('Reels clicked');
    window.location.assign("reels.php");

});
search.addEventListener('click', ()=>{
      console.log('search clicked');
      let search_section= document.querySelector('.search_section');
      search_section.classList.remove('hide');
      search_section.classList.add('animate');
      
      var head = document.head || document.getElementsByTagName('head')[0];
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'css/search.css';
      head.appendChild(link);
});
var searchform = document.querySelector('.search_input');

      let searchinput = document.querySelector('.searchsections');
      // console.log(searchinput);
      let clear = document.querySelector('.fa-times');

      clear.addEventListener('click', ()=>{
        searchinput.value = ' ';
      });

      let results = document.querySelector('.results');
      searchinput.onkeyup = ()=>{
        Array.from(results.children).forEach(child => {
          child.remove();
        })
        console.log('key is being clicked');
          // e.preventDefault();

          let xhr = new XMLHttpRequest(); //creating xml object
          xhr.open("post", "search.php", true);
          xhr.onload = () => {
            if(xhr.readyState === XMLHttpRequest.DONE) {
              if(xhr.status === 200){
                  let data = xhr.response;
                  var arr = JSON.parse(data);
                  arr.forEach(element => { createsearchcard(element);
                  });
              }
          }
      }
    let formData = new FormData(searchform);
    
    xhr.send(formData);
    
    count++;

 
    // ask_request.forEach(element => {
    //   console.log(element);
    //   element.onclick = (e) =>{
    //     console.log('request asked clicked');
    //     let id =e.target.dataset.userid;
    //     ask(id)
    //   }
      
    // });
  }
  let isOn = true;

 function createsearchcard(card){
  // console.log('bla');
  // console.log(card);
    let result_card = document.createElement("div");
    result_card.classList.add("result-card");

    let result_data = document.createElement("div");
    result_data.classList.add("result_data");

    let pro_pi= document.createElement("img");
    pro_pi.src = card.profile_picture;
    pro_pi.classList.add('pro_pic');

    let result = document.createElement("div");
    result.classList.add("result");

    if(card.username !== null){
    let Username = document.createElement("h3");
    Username.innerHTML = card.username;
    result.appendChild(Username);
    }

    let pharagraph= document.createElement("p");
    pharagraph.innerHTML = card.fname + " " + card.lname


    let ask_btn = document.createElement("button");
    ask_btn.classList.add("ask_friend");
    ask_btn.setAttribute("data-userId", (card.id).toString());
    ask_btn.innerHTML = 'Friend Request'

    ask_btn.addEventListener("click", (e)=>{
      console.log(' Ask friend request clicked');
        let id =e.target.dataset.userid;
        if(isOn){
          ask_btn.style.backgroundColor = "#6bd445";
          ask(id)
        }else{
          ask_btn.style.backgroundColor = "var(--primary-clr)";
          //decline(id);
        }

        
        isOn = !isOn;

    })



    result_card.appendChild(result_data);
    result_card.appendChild(ask_btn);

    result_data.appendChild(pro_pi);
    result_data.appendChild(result);

    
    result.appendChild(pharagraph);

    
    results.appendChild(result_card)
  }
  


function ask(userid) {
      console.log(userid + ' accepted');
        console.log("accepted");
      
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "friendrequest.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onload = () => {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
              let data = xhr.response;
              console.log(data);
            }
          }
        };
        xhr.send("userid=" + userid);
    }

  // if(count > 1){
    

// }

setting.addEventListener("click", ()=>{
let logout = new XMLHttpRequest();
logout.open("post", "logout.php", true);

logout.onload = () => {
  if(logout.readyState === XMLHttpRequest.DONE) {
    if(logout.status === 200){
      let data = logout.response;
      if(data === "success"){
        console.log(data);
        window.location.href = "loginpage.php";
      }
      console.log(data);
      
    }
  }
};
logout.send();

});




// sharePhoto[0].addEventListener('click', ()=>{
//     document.getElementById('file_input').click();
// });

// let userdata, user;

// function fetchUserData(callback) {
//   fetch('getuser.php')
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       user = data;
//       console.log(user);

//       userdata = User(data.id, data.fname, data.lname, data.password_hash, data.email, data.gender, data.date_of_birth);
//       userdata.profile_picture = data.profile_picture;
//       userdata.bio = data.bio;
//       userdata.website = data.website;
//       userdata.Status = data.Status;
//       userdata.created_at = data.created_at;
//       userdata.updated_at = data.updated_at;
//       userdata.location = data.location;
//       userdata.phone_number= data.phone_number;
//       userdata.is_verified= data.is_verified;
//       userdata.is_active = data.is_active;
//       userdata.timezone= data.timezone;
//       userdata.notification_setting = data.notification_setting;
//       userdata.last_login = data.last_login;
//       userdata.login_count = data.login_count;

//       callback(userdata); // Call the callback function with the userdata
//     })
//     .catch(function(error) {
//       console.log('Error:', error);
//     });
// }

// fetchUserData(function(userdata) {
//   console.log(userdata);
//    userdata // Use the userdata here or pass it to other functions
// });
let userdata;
let friend = [];

function fetchUserData() {
  return new Promise((resolve, reject) => {
    fetch('getuser.php')
      .then(response => response.json())
      .then(data => {
        userdata = User(data.id, data.fname, data.lname, data.password_hash, data.email, data.gender, data.date_of_birth);
        userdata.profile_picture = data.profile_picture;
        userdata.bio = data.bio;
        userdata.website = data.website;
        userdata.Status = data.Status;
        userdata.created_at = data.created_at;
        userdata.updated_at = data.updated_at;
        userdata.location = data.location;
        userdata.phone_number = data.phone_number;
        userdata.is_verified = data.is_verified;
        userdata.is_active = data.is_active;
        userdata.timezone = data.timezone;
        userdata.notification_setting = data.notification_setting;
        userdata.last_login = data.last_login;
        userdata.login_count = data.login_count;
        profilepic2.src = "img/photos-to-be-used/horses.jpg";
        profilepic.src = data.profile_picture;
        resolve(userdata);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export { fetchUserData, userdata };





function fetchFriends() {
      return new Promise((resolve, reject) => {
        fetch('friends.php')
          .then(response => response.json())
          .then(data => {
            for(let i = 0; i < data.length; i++) {
            friend[i] = Friends(data[i].friendRequest_id, data[i].user_id, data[i].friend_id, data[i].status, data[i].action_user_id);
                friend[i].created_at = data[i].created_at;
                friend[i].updated_at = data[i].updated_at;
                friend[i].is_deleted = data[i].is_deleted;
                friend[i].blocked_at = data[i].blocked_at;
                friend[i].fname = data[i].fname;
                friend[i].lname = data[i].lname;
                friend[i].username = data[i].username;
                friend[i].profile_picture = data[i].profile_picture;
                friend[i].is_active = data[i].is_active;
            }
            
            resolve(friend);
        })
        .catch(error => {
          reject(error);
        });
    });
}
    export { fetchFriends, friend };


let userid;
fetchUserData()
  .then(userdata => {
    profilepic.src = userdata.profile_picture;
    profilepic2.src = userdata.profile_picture;
    console.log(userdata);
    userid= userdata.id // Access the userdata
    // Use the userdata or pass it to other functions
  }).then(() => {
    
  })
  .catch(error => {
    console.log('Error:', error);
  });

    // fetchFriends()
    // .then(friend => {
    //   console.log(friend);
    //   // userid= userdata.id // Access the userdata
    //   // Use the userdata or pass it to other functions
    // }).then(() => {
      
    // })
    // .catch(error => {
    //   console.log('Error:', error);
    // });

//  =

// let user = User('abebe', 'kebede', 'blabla', 'abebe@gmail.com','', '2023-01-23' );
// console.log(user);
